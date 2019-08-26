import React from 'react'

export type Repo = {
  id: number,
  html_url: string,
  name: string
};

type RepoItemProps = {|
  repo: Repo
|};

const RepoItem = ({ repo }: RepoItemProps) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}

export default RepoItem
