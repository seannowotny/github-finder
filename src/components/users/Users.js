import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import type { Element } from 'react';
import type { User } from './UserItem';

type UserProps = {|
  users: Array<User>,
  isLoading: boolean
|};

const Users = ({ users, isLoading }: UserProps) => {
  let result: Element<any>;

  if (isLoading) {
    result = <Spinner />;
  } else {
    result = (
      <div style={userStyle}>
        {users.map(user => (
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
