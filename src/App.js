//#region Imports 
import React, { Component, Fragment } from 'react';
import axios from 'axios';                                                  //Not an error
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  //Not an error

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import About from './components/pages/About';

import type { Element } from 'react';
import type { User } from './components/users/UserItem';
import type { AlertContents } from './components/layout/Alert';

import './App.css';
//#endregion 

//#region Types
type ENV = { [string]: ?string };

type AppProps = {};

type AppState = {|
  users: Array <User>,
  isLoading: boolean,
  alert: AlertContents
|}

type UsersResponse = {|
  data: {| items: Array<User> |} & Array<User> 
|};

//#endregion

class App extends Component<AppProps, AppState>
{
  state: AppState = {
    users: [],
    isLoading: true,
    alert: null
  }

  componentDidMount() 
  {
    this.getUsers();
  }

  getUsers = async (): any =>
  {
    this.setState({ isLoading: true });
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users?client_id=
    ${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=
    ${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UsersResponse = await axios.get(url);
    this.setState({ users: res.data, isLoading: false });
  };

  render(): Element<string> {
    const { users, isLoading, alert }: AppState = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' 
              render={props => (
                <Fragment>
                  <Search 
                  searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  areUsersDisplayed={users.length > 0 ? true : false} 
                  setAlert={this.setAlert}
                  />
                  <Users isLoading={isLoading} users={users} />
                </Fragment>
              )} 
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  searchUsers = async (text: string): Promise<void> => 
  {
      this.setState({ isLoading: true });
      const env: ENV = process.env;
      const url: string = `https://api.github.com/search/users?q=${text}&client_id=
      ${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=
      ${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

      const res: UsersResponse = await axios.get(url);
      this.setState({ users: res.data.items, isLoading: false });
  };

  clearUsers = () => this.setState({ users: [], isLoading: false });

  setAlert = (msg: string, type: string) =>
  {
    this.setState({ alert: { msg, type }});

    setTimeout(() => this.setState({ alert: null }), 3000);
  }
}

export default App;
