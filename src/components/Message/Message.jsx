import React from 'react';
import './Message.scss';

export const Message = (props) => {
  const messageList = props.message
  return messageList.map((message) =>
    <p
      className={message.author === "Bot" ? "bot" : "user"}
      key={messageList.indexOf(message)}>
      <span className="author">{message.author}</span>: {message.text}
    </p>);
};
