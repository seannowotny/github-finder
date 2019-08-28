//#region Imports
import React, { useReducer, useEffect  } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_IS_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  GET_USERS } from '../types';

import type { GithubUserData } from '../../components/users/User';
import type { Repo } from '../../components/repos/RepoItem';


//#endregion

//#region Types
export type State = {|
  user: GithubUserData,
  users: Array<GithubUserData>,
  repos: Array<Repo>,
  isLoading: boolean
|};

export type SearchUsersType = { (string): Promise<void> };
export type ClearUsersType = { (): Promise<void> };
export type GetGithubUserData = { (string): Promise<void> };
export type GetUserReposType = { (string): Promise<void>  };

type Props = {|
  children: any
|};

type UsersResponse = {|
  data: {| items: Array<GithubUserData> |}
|};

type UserResponse = {|
  data: GithubUserData
|};

type UserReposResponse = {|
  data: Array<Repo>
|};
//#endregion

const GithubState = (props: Props) => {
  const initialState: State = {
    user: {},
    users: [],
    repos: [],
    isLoading: false,
  };

  const [state, dispatch]: [State, any] = useReducer(GithubReducer, initialState);

  useEffect(() => { // This isn't clean code! Fix later!
    getUsers();
    // eslint-disable-next-line
  }, []);

  //Get Users
  const getUsers = async (): Promise<void> =>
  {
    setIsLoading();
    const url: string = `https://api.github.com/users?client_id=${String(process.env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(process.env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UsersResponse = await axios.get(url);

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  };

  // Search Users
  const searchUsers: SearchUsersType = async (text: string): Promise<void> => 
  {
      setIsLoading();
      const url: string = `https://api.github.com/search/users?q=${text}&client_id=${String(process.env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(process.env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

      const res: UsersResponse = await axios.get(url);

      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });
  };

  // Get User
  const getUser = async (username: string): Promise<void> =>
  {
    setIsLoading();
    const url: string = `https://api.github.com/users/${username}?client_id=${String(process.env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(process.env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserResponse = await axios.get(url);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get Repos
  const getUserRepos = async (username: string): Promise<void> =>
  {
    setIsLoading();
    const url: string = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${String(process.env.REACT_APP_GITHUB_CLIENT_ID)}&client_secret=${String(process.env.REACT_APP_GITHUB_CLIENT_SECRET)}`;

    const res: UserReposResponse = await axios.get(url);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setIsLoading = () => dispatch({ type: SET_IS_LOADING });

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      isLoading: state.isLoading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;
