import {useRef, useEffect} from "react";
import {AUTHORS} from "../../utils/constants"
import styles from "./Message.module.scss";
import {useDispatch} from "react-redux";
import {deleteMessage} from "../../store/messages/action";

export const Message = ({messageList, chatId}) => {
  const scroll = useRef();
  const dispatch = useDispatch();

  const delMessage = event => {
    dispatch(deleteMessage(chatId, event.target.value))
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "auto"});
  });

  return messageList.map((message) =>
      <p ref={scroll}
         className={message.author === AUTHORS.bot ? styles.bot : styles.user}
         key={message.id}>
        <span className={styles.author}>{message.author}</span>: {message.text}
        <button
          className={styles.del}
          onClick={delMessage}
          value={message.id}>
          &times;
        </button>
      </p>
  );
};
