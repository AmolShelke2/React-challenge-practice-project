import React, { useState } from 'react';

import './FormInput.css';

const FormInput = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');

  const onUserNameChangeHandler = e => {
    setUserNameInput(e.target.value);
  };

  const onUserAgeChangeHandler = e => {
    const ageInNumber = +e.target.value;
    setUserAgeInput(ageInNumber);
  };

  const UserAddHandler = e => {
    e.preventDefault();
    console.log('Form submitted');
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
      <button type="submit" onSubmit={UserAddHandler}>
        Add user
      </button>
    </form>
  );
};

export default FormInput;
