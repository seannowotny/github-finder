import React from 'react';
import { Link } from 'react-router-dom';

import type { Element } from 'react';

export type User = ?{|
  id: number,
  login: string,
  avatar_url: string,
  html_url: string
|};

type UserProps = {|
  user: User
|};

const UserItem = ({ user }: UserProps): Element<string> | null => {
  if(user)
  {
    const { login, avatar_url, html_url }: $NonMaybeType<User> = user;
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
          <Link to={`/user/${login}`} className='btn btn-dar btn-sm my-1'>
            More
          </Link>
        </div>
      </div>
    );
  }
  else
  {
    return null;
  }
};

export default UserItem;
