import React, { Component } from 'react';

//#region Types
type GithubUserData = {|
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
  hirable: string
|}

type UserWindowProps = {|
  getUser: (string) => Promise<void>,
  match: {|
    params: GithubUserData
  |},
  user: GithubUserData,
  isLoading: boolean
|} | any;

type UserWindowState = {||};
//#endregion

export class UserWindow extends Component<UserWindowProps, UserWindowState> {
  componentDidMount()
  {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
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
      hirable
    }: GithubUserData = this.props.user;

    const { isLoading }: UserWindowProps = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
}

export default UserWindow
