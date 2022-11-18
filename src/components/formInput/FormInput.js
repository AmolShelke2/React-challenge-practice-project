import React, { useState } from 'react';

import './FormInput.css';

import Button from '../Button';

const FormInput = props => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');

  const onUserNameChangeHandler = e => {
    setUserNameInput(e.target.value);
  };

  const onUserAgeChangeHandler = e => {
    setUserAgeInput(e.target.value);
  };

  const validateUserName = userName => {
    if (userName === '') {
      setUserNameInput('');
      alert('Add a userName');
    }
  };

  const validateUserAge = userAge => {
    if (userAge < 0 || userAge > 100) {
      setUserAgeInput('');
      alert('Add a valid age');
    }
  };

  const UserAddHandler = e => {
    e.preventDefault();

    validateUserName(userNameInput);
    validateUserAge(+userAgeInput);

    const newUserData = {
      name: userNameInput,
      age: +userAgeInput,
      id: Math.random().toString(),
    };

    props.onAddNewUser(newUserData);
    setUserNameInput('');
    setUserAgeInput('');
  };

  return (
    <form className="form-control" onSubmit={UserAddHandler}>
      <div className="form-inputs">
        <label>UserName</label>
        <input
          type="text"
          value={userNameInput}
          placeholder="Enter your name"
          onChange={onUserNameChangeHandler}
        />

        <label>Age(In number)</label>
        <input
          type="number"
          value={userAgeInput}
          placeholder="Enter your age"
          onChange={onUserAgeChangeHandler}
        />
      </div>
      <Button onSubmit={UserAddHandler} />
    </form>
  );
};

export default FormInput;
