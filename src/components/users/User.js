import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

import type { Element } from 'react';

import type { Repo } from '../repos/RepoItem';

//#region Types
export type GithubUserData = {
  name: string,
  avatar_url: string,
  location: string,
  bio: string,
  blog: string,
  login: string,
  html_url: string,
  followers: string,
  following: string,
  public_repos: string,
  public_gists: string,
  hirable: string,
  company: string
};

type UserProps = {|
  getUser: (string) => Promise<void>,
  getUserRepos: (string) => Promise<void>,
  match: {|
    params: GithubUserData
  |},
  user: GithubUserData,
  isLoading: boolean,
  repos: Array<Repo>
|} | any;
//#endregion

const User = ({ user, repos, getUser, getUserRepos, match, isLoading }: UserProps): Element<any> =>
{
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
    company
  }: GithubUserData = user;

  if(isLoading) return <Spinner />; 

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      hirable: {' '}
      {hirable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img 
            src={avatar_url} 
            className="round-img" 
            alt="" 
            style={{width: '150px'}}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && 
          <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
          }
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && 
              <Fragment>
                <strong>Username: </strong> {login}
              </Fragment>
              }
            </li>
            <li>
              {company && 
              <Fragment>
                <strong>Company: </strong> {company}
              </Fragment>
              }
            </li>
            <li>
              {blog && 
              <Fragment>
                <strong>Website: </strong> {blog}
              </Fragment>
              }
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">
          Followers: {followers}
        </div>
        <div className="badge badge-success">
          Following: {following}
        </div>
        <div className="badge badge-light">
          Public Repos: {public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists: {public_gists}
        </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
}

export default User
