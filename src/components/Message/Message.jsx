import React, {useRef, useEffect} from 'react';
import './Message.scss';
import {AUTHORS} from "../../utils/constants"

export const Message = ({messageList}) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "auto"});
  });

  return messageList.map((message) =>
    <p ref={scroll}
       className={message.author === AUTHORS.bot ? "bot" : "user"}
       key={message.id}>
      <span className="author">{message.author}</span>: {message.text}
    </p>);
};
