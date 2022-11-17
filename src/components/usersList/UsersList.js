import React from 'react';

export const UsersList = props => {
  console.log(props);

  return (
    <ul className="user-lists">
      {props.users.map(user => (
        <li className="user-list-item" key={user.id}>
          {user.name} Age({user.age})
        </li>
      ))}
    </ul>
  );
};
