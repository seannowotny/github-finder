import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'; //Not an error

import type { User } from './components/users/UserItem';

import './App.css';

type AppProps = {};

type AppState = {|
  users: Array<User>,
  loading: boolean
|};

type UsersResponse = {|
  data: Array<User>
|};

class App extends Component<AppProps, AppState> {
  state: AppState = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res: UsersResponse = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <nav className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </nav>
    );
  }
}

export default App;
