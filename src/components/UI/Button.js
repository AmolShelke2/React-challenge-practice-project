import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button className="button" type="submit" onClick={props.onClick}>
      Add user
    </button>
  );
};

export default Button;
