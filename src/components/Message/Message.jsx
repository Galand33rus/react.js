import React from 'react';
import './Message.scss';
import {AUTHORS} from "../../utils/constants"

export const Message = ({ messageList }) => {
  return messageList.map((message) =>
    <p
      className={message.author === AUTHORS.bot ? "bot" : "user"}
      key={message.id}>
      <span className="author">{message.author}</span>: {message.text}
    </p>);
};
