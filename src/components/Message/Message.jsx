import {useRef, useEffect} from "react";
import {AUTHORS} from "../../utils/constants"
import styles from "./Message.module.scss";

export const Message = ({messageList}) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "auto"});
  });

  return messageList.map((message) =>
    <p ref={scroll}
       className={message.author === AUTHORS.bot ? styles.bot : styles.user}
       key={message.id}>
      <span className={styles.author}>{message.author}</span>: {message.text}
    </p>);
};
