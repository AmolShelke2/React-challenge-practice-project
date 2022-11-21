import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './AddUser.css';

const AddUser = props => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');

  const userNameChangeHandler = event => {
    setUserNameInput(event.target.value);
  };

  const userAgeChangeHandler = event => {
    setUserAgeInput(event.target.value);
  };

  const addUserHandler = e => {
    e.preventDefault();
    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      console.error('Add a valid user input');
      return;
    }

    if (+userAgeInput < 1) {
      console.error('Add a valid user Age');
      return;
    }

    props.onAddUser(userNameInput, userAgeInput);
    setUserNameInput('');
    setUserAgeInput('');
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
            value={userNameInput}
          />

          <label htmlFor="userAge">Age(In Years)</label>
          <input
            type="number"
            placeholder="Enter your age"
            id="userAge"
            value={userAgeInput}
            onChange={userAgeChangeHandler}
          />
        </div>
        <Button onClick={addUserHandler} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
