import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import type { Element } from 'react';
import type { GithubUserData } from './User';
import type { Context } from '../../context/github/githubContext';

const Users = () => {
  const { isLoading, users }: Context = useContext(GithubContext);

  let result: Element<any>;

  if (isLoading) {
    result = <Spinner />;
  } else {
    result = (
      <div style={userStyle}>
        {users.map((user): Element<typeof UserItem> => (
            <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
  return result;
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
