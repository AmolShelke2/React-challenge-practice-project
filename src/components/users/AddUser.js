import React from 'react';

const AddUser = () => {
  const addUserHandler = e => {
    e.preventDefault();
  };

  return (
    <form className="form-control" onSubmit={addUserHandler}>
      <div className="form-inputs">
        <label htmlFor="username">UserName</label>
        <input placeholder="Enter your name" id="username" />

        <label htmlFor="userAge">Age(In Years)</label>
        <input type="number" placeholder="Enter your age" id="userAge" />
      </div>
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;
