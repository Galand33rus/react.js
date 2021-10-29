import React from 'react';
import './Form.scss';

export const Form = (props) => {
  return <form className="form" onSubmit={props.updateMessageList}>
    <input
      className="input"
      type="text"
      placeholder="Enter a message"
      value={props.value}
      onChange={props.handleMessageChange}/>
    <button
      className="button"
      type="submit"
      onSubmit={props.updateMessageList}>
        send
    </button>
  </form>;
};




