import React, { useState } from 'react';

import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
  const [userLists, setUserLists] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserLists(prevUserLists => {
      return [
        ...prevUserLists,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userLists} />
    </div>
  );
}

export default App;
