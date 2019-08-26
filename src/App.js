//#region Imports 
import React, { Component, Fragment } from 'react';
import axios from 'axios';             
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';

import About from './components/pages/About';

import type { Element } from 'react';
import type { UserType } from './components/users/UserItem';
import type { AlertContents } from './components/layout/Alert';
import type { Repo } from './components/repos/RepoItem';

import './App.css';
//#endregion 

//#region Types
type ENV = { [string]: ?string };

type AppProps = {||};

type AppState = {|
  user: UserType,
  users: Array <UserType>,
  isLoading: boolean,
  alert: AlertContents,
  repos: Array<Repo>
|}

type UsersResponse = {|
  data: {| items: Array<UserType> |} & Array<UserType> 
|};

type UserResponse = {|
  data: UserType
|};

type UserReposResponse = {|
  data: Array<Repo>
|};

//#endregion

class App extends Component<AppProps, AppState>
{
  state: AppState = {
    user: {},
    users: [],
    isLoading: true,
    alert: null,
    repos: []
  }

  componentDidMount() 
  {
    this.getUsers();
  }

  getUsers = async (): any =>
  {
    this.setState({ isLoading: true });
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users?client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UsersResponse = await axios.get(url);
    this.setState({ users: res.data, isLoading: false });
  };

  render(): Element<any> {
    const { users, isLoading, alert, user, repos }: AppState = this.state;
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

              <Route exact path='/user/:login'
              render={props => (
                <User 
                  { ...props } 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos}
                  user={user} 
                  repos={repos}
                  isLoading={isLoading} 
                />
              )} />
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
      const url: string = `https://api.github.com/search/users?q=${text}&client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

      const res: UsersResponse = await axios.get(url);
      this.setState({ users: res.data.items, isLoading: false });
  };

  getUser = async (username: string): Promise<void> =>
  {
    this.setState({ isLoading: true });
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users/${username}?client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserResponse = await axios.get(url);
    this.setState({ user: res.data, isLoading: false });
  };

  getUserRepos = async (username: string): Promise<void> =>
  {
    this.setState({ isLoading: true });
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserReposResponse = await axios.get(url);
    this.setState({ repos: res.data, isLoading: false });
  };

  clearUsers = () => this.setState({ users: [], isLoading: false });

  setAlert = (msg: string, type: string) =>
  {
    this.setState({ alert: { msg, type }});

    setTimeout(() => this.setState({ alert: null }), 3000);
  }
}

export default App;
