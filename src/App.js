import React, { useState } from 'react';

import FormInput from './components/formInput';
import UsersList from './components/usersList';

const inital_state = [
  {
    name: 'Amol Shelke',
    age: 18,
    id: 'u1',
  },

  {
    name: 'max',
    age: 16,
    id: 'u2',
  },
];

function App() {
  const [users, setUsers] = useState(inital_state);

  const addNewUserHandler = newUser => {
    setUsers(prevUsers => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <FormInput onAddNewUser={addNewUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
