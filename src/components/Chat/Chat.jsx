import {useEffect, useCallback} from "react";
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {AUTHORS} from "../../utils/constants";
import {v4 as uuidv4} from "uuid";
import {Form} from "../Form";
import {Message} from "../Message";
import {ChatList} from "../ChatList";
import {ChatListForm} from "../ChatListForm";
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/chats/selectors";
import {getMessageList} from "../../store/messages/selectors";
import {addChat, deleteChat} from "../../store/chats/action";
import {addMessages, deleteMessages, updateMessages} from "../../store/messages/action";
import styles from "./Chat.module.scss";

export const Chat = () => {
  const navigate = useNavigate();
  const {chatId} = useParams();
  const dispatch = useDispatch();
  const chatList = useSelector(getChatList);
  const messagesList = useSelector(getMessageList)

  const updateMessagesList = useCallback(
    (newMessage) => {
      dispatch(updateMessages(chatId, newMessage))
    },
    [chatId]
  );

  const updateChatList = newChat => {
    dispatch(addChat(newChat));
    dispatch(addMessages(newChat.id));
  };
  const removeItem = id => {
    dispatch(deleteChat(id))
    dispatch(deleteMessages(id))

    if (id === chatId) {
      navigate("/chat")
    }
  };

  useEffect(() => {
    console.log(chatList)
    console.log(messagesList)
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messagesList[chatId]?.length &&
        messagesList[chatId][messagesList[chatId]?.length - 1].author !== AUTHORS.bot) {
        updateMessagesList({
          author: AUTHORS.bot,
          text: "I'm a bot",
          id: uuidv4()
        })
      }
    }, 1000);
    return () => clearTimeout(timer)
  }, [messagesList[chatId]]);

  if (chatId && !(chatId in messagesList)) {
    return <Navigate replace to="/chat"/>;
  }

  return (
    <div className={styles.chat}>
      <div className={styles.list}>
        <ChatList chatList={chatList} removeItem={removeItem}/>
        <ChatListForm updateChatList={updateChatList}/>
      </div>
      {chatId && <div className="chat-wrapper">
        <div className={styles.window}>
          <Message messageList={messagesList[chatId]}/>
        </div>
        <Form updateMessageList={updateMessagesList}/>
      </div>}
    </div>
  );
};
