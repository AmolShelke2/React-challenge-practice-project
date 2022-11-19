import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './AddUser.css';

const AddUser = props => {
  const addUserHandler = e => {
    e.preventDefault();
  };

  const clickHandler = () => {
    console.log('button clicked');
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
        <Button onClick={clickHandler} />
      </form>
    </Card>
  );
};

export default AddUser;
