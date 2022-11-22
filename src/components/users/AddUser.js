import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import './AddUser.css';

const AddUser = props => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');

  const [error, setError] = useState();

  const userNameChangeHandler = event => {
    setUserNameInput(event.target.value);
  };

  const userAgeChangeHandler = event => {
    setUserAgeInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = e => {
    e.preventDefault();
    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      setError({
        errorTitle: 'Invalid input',
        errorMessage: 'Please add a valid input value not an empty input',
      });
      return;
    }

    if (+userAgeInput < 1) {
      setError({
        errorTitle: 'Invalid Aget',
        errorMessage: 'Please add a valid Age input value (age > 0)',
      });
      return;
    }

    props.onAddUser(userNameInput, userAgeInput);
    setUserNameInput('');
    setUserAgeInput('');
  };

  return (
    <div>
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
          onConfirm={errorHandler}
        />
      )}

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
    </div>
  );
};

export default AddUser;
