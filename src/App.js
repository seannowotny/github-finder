//#region Imports 
import React, { Fragment, useState } from 'react';      
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';

import About from './components/pages/About';

import type { AlertContents } from './components/layout/Alert';

import './App.css';
//#endregion 

const App = () =>
{
  const[alert, setAlert]: [AlertContents, (any) => void] = useState(null);

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
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
