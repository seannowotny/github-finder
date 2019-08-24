//#region Imports 
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios'; //Not an error

import type { User } from './components/users/UserItem';

import './App.css';
//#endregion 

//#region Types
type ENV = { [string]: ?string };

type AppProps = {};

type AppState = {|
  users: Array <User>,
  loading: boolean
|};

type UsersResponse = {|
  data: {| items: Array<User> |} & Array<User> 
|};

//#endregion

class App extends Component<AppProps, AppState>
{
  state: AppState = {
    users: [],
    loading: false
  }

  componentDidMount() 
  {
    this.setState({ loading: true });
    this.getUsers();
  }

  getUsers = async (): any =>
  {
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users?client_id=
    ${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=
    ${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UsersResponse = await axios.get(url);
    this.setState({ users: res.data, loading: false });
  };

  render() 
  {
    return (
      <nav className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </nav>
    );
  }

  searchUsers = async (text: string): Promise<void> => 
  {
    const env: ENV = process.env;
    const url: string = `https://api.github.com/search/users?q=${text}&client_id=
    ${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=
    ${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UsersResponse = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };
}

export default App;
