//#region Imports 
import React, { Fragment, useState } from 'react';
import axios from 'axios';             
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';

import About from './components/pages/About';

import type { GithubUserData } from './components/users/User';
import type { AlertContents } from './components/layout/Alert';
import type { Repo } from './components/repos/RepoItem';

import './App.css';
//#endregion 

//#region Types
type ENV = { [string]: ?string };

type UserReposResponse = {|
  data: Array<Repo>
|};

//#endregion

const App = () =>
{
  const[isLoading, setIsLoading]: [boolean, (any) => void] = useState(false);
  const[alert, setAlert]: [AlertContents, (any) => void] = useState(null);
  const[repos, setUserRepos]: [Array<Repo>, (any) => void] = useState([]);

  const getUserRepos = async (username: string): Promise<void> =>
  {
    setIsLoading(true);
    const env: ENV = process.env;
    const url: string = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${String(env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserReposResponse = await axios.get(url);
    setUserRepos(res.data);
    setIsLoading(false);
  };

  const showAlert = (msg: string, type: string) =>
  {
    setAlert({msg, type});

    setTimeout(() => setAlert(null), 3000);
  }

  return (
    <GithubState>
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
                  setAlert={showAlert}
                  />
                  <Users />
                </Fragment>
              )} 
              />
              <Route exact path='/about' component={About} />

              <Route exact path='/user/:login'
              render={props => (
                <User
                  { ...props } 
                  getUserRepos={getUserRepos}
                  repos={repos}
                />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
