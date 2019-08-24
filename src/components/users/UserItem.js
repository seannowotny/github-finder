import React from 'react';

export type User = {|
  id: number,
  login: string,
  avatar_url: string,
  html_url: string
|};

type UserProps = {|
  user: User
|};

const UserItem = ({ user: { login, avatar_url, html_url } }: UserProps) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className='btn btn-dar btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
