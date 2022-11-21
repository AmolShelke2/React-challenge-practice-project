import React from 'react';

import Card from '../UI/Card';
import './UserList.css';

const UserList = props => {
  return (
    <Card>
      <ul className="user-lists">
        {props.users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
