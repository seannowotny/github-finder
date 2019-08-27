import { createContext } from 'react';

import type { GithubUserData } from '../../components/users/User';
import type { Repo } from '../../components/repos/RepoItem';
import type { SearchUsersType } from './GithubState';
import type { ClearUsersType } from './GithubState';
import type { GetGithubUserData } from './GithubState';

export type Context = {|
  users: Array<GithubUserData>,
  user: GithubUserData,
  repos: Array<Repo>,
  isLoading: boolean,
  searchUsers: SearchUsersType,
  clearUsers: ClearUsersType,
  getUser: GetGithubUserData
|};

//$FlowFixMe
const githubContext = createContext();

export default githubContext;