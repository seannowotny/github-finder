//#region Imports 
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';             
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';

import About from './components/pages/About';

import type { UserType } from './components/users/UserItem';
import type { AlertContents } from './components/layout/Alert';
import type { Repo } from './components/repos/RepoItem';

import './App.css';
//#endregion 

//#region Types
type ENV = { [string]: ?string };

type UsersResponse = {|
  data: Array<UserType>
|};

type UsersSearchResponse = {|
  data: {| items: Array<UserType> |}
|};

type UserResponse = {|
  data: UserType
|};

type UserReposResponse = {|
  data: Array<Repo>
|};

//#endregion

const App = () =>
{
  const[user, setUser]: [UserType, (any) => void] = useState({});
  const[users, setUsers]: [Array <UserType>, (any) => void] = useState([]);
  const[isLoading, setIsLoading]: [boolean, (any) => void] = useState(false);
  const[alert, setAlert]: [AlertContents, (any) => void] = useState(null);
  const[repos, setUserRepos]: [Array<Repo>, (any) => void] = useState([]);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const getUsers = async (): Promise<void> =>
  {
    setIsLoading(true);
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users?client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UsersResponse = await axios.get(url);
    setUsers(res.data);
    setIsLoading(false);
  };

  const searchUsers = async (text: string): Promise<void> => 
  {
      setIsLoading(true);
      const env: ENV = process.env;
      const url: string = `https://api.github.com/search/users?q=${text}&client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

      const res: UsersSearchResponse = await axios.get(url);
      setUsers(res.data.items);
      setIsLoading(false);
  };

  const getUser = async (username: string): Promise<void> =>
  {
    setIsLoading(true);
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users/${username}?client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserResponse = await axios.get(url);
    setUser(res.data);
    setIsLoading(false);
  };

  const getUserRepos = async (username: string): Promise<void> =>
  {
    setIsLoading(true);
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserReposResponse = await axios.get(url);
    setUserRepos(res.data);
    setIsLoading(false);
  };

  const clearUsers = () =>
  {
    setUsers([]);
  }

  const showAlert = (msg: string, type: string) =>
  {
    setAlert({msg, type});

    setTimeout(() => setAlert(null), 3000);
  }

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
                searchUsers={searchUsers} 
                clearUsers={clearUsers} 
                areUsersDisplayed={users.length > 0 ? true : false} 
                setAlert={showAlert}
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
                getUser={getUser} 
                getUserRepos={getUserRepos}
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

export default App;
