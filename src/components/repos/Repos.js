import React from 'react'

import type { Element } from 'react';

import RepoItem from './RepoItem';

import type { Repo } from './RepoItem';

type ReposProps = {|
  repos: Array<Repo>
|};

const Repos = ({ repos }:ReposProps): Array<Element<any>> => {
  return repos.map((repo: Repo) => <RepoItem repo={repo} key={repo.id} />);
}

export default Repos
