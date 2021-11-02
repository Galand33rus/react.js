import React from 'react';
import './Message.scss';

export const Message = ({ messageList }) => {
  return messageList.map((message) =>
    <p
      className={message.author === "Bot" ? "bot" : "user"}
      key={messageList.indexOf(message)}>
      <span className="author">{message.author}</span>: {message.text}
    </p>);
};
