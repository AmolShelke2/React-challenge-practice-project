import React, { useState } from 'react';

const FormInput = () => {
  const initial_state = {
    name: '',
    age: '',
  };

  const [userInput, setUserInput] = useState(initial_state);

  const onUserNameChangeHandler = e => {
    console.log(e.target.value);
  };

  const onUserAgeChangeHandler = e => {
    console.log(e.target.value);
  };

  return (
    <form className="form-control" style={{ textAlign: 'center' }}>
      <label>UserName</label>
      <input
        type="text"
        value={userInput.name}
        placeholder="Enter your name"
        onChange={onUserNameChangeHandler}
      />

      <label>Age(In number)</label>
      <input
        type="number"
        value={userInput.age}
        placeholder="Enter your age"
        onChange={onUserAgeChangeHandler}
      />
    </form>
  );
};

export default FormInput;
