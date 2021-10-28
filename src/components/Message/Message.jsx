import React from 'react';
import './Message.css';

export const Message = ({ message }) => {
  return (
    <p className="message">
      {message}
    </p>
  );
};
