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

  const UserAddHandler = e => {
    e.preventDefault();

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
