import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './AddUser.css';

const AddUser = props => {
  const [userNameInput, setUserNameInput] = useState('');

  const userNameChangeHandler = event => {
    console.log(event);
  };

  const addUserHandler = e => {
    e.preventDefault();
  };

  return (
    <Card>
      <form className="form" onSubmit={addUserHandler}>
        <div className="formInputs">
          <label htmlFor="username">UserName</label>
          <input
            placeholder="Enter your name"
            id="username"
            onChange={userNameChangeHandler}
          />

          <label htmlFor="userAge">Age(In Years)</label>
          <input type="number" placeholder="Enter your age" id="userAge" />
        </div>
        <Button onClick={addUserHandler} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
