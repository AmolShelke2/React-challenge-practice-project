import React from 'react';

import Button from './Button';
import Card from './Card';

import './ErrorModal.css';

const ErrorModal = props => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{props.errorTitle}</h2>
        </header>
        <div className="content">
          <p>{props.errorMessage}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
