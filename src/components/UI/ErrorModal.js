import React from 'react';

import { createPortal } from 'react-dom';

import Button from './Button';
import Card from './Card';

import './ErrorModal.css';

const BackDrop = props => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModelOverlay = props => {
  return (
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
  );
};

const ErrorModal = props => {
  return (
    <React.Fragment>
      {createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      ,
      {createPortal(
        <ModelOverlay
          errorTitle={props.errorTitle}
          errorMessage={props.errorMessage}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root'),
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
