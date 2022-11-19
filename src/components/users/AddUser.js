import React from 'react';
import Card from '../UI/Card';

import './AddUser.css';

const AddUser = props => {
  const addUserHandler = e => {
    e.preventDefault();
  };

  return (
    <Card>
      <form className="form" onSubmit={addUserHandler}>
        <div className="formInputs">
          <label htmlFor="username">UserName</label>
          <input placeholder="Enter your name" id="username" />

          <label htmlFor="userAge">Age(In Years)</label>
          <input type="number" placeholder="Enter your age" id="userAge" />
        </div>
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
