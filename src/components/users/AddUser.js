import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Wrapper from '../helpers/Helper';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import './AddUser.css';

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        errorTitle: 'Invalid input',
        errorMessage: 'Please add a valid input value not an empty input',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        errorTitle: 'Invalid Age',
        errorMessage: 'Please add a valid Age input value (age > 0)',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
          onConfirm={errorHandler}
        />
      )}

      <Card className="form">
        <form className="form" onSubmit={addUserHandler}>
          <div className="formInputs">
            <label htmlFor="username">UserName</label>
            <input
              placeholder="Enter your name"
              id="username"
              ref={nameInputRef}
            />

            <label htmlFor="userAge">Age(In Years)</label>
            <input
              type="number"
              placeholder="Enter your age"
              id="userAge"
              ref={ageInputRef}
            />
          </div>
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

//
