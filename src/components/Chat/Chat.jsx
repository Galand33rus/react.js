import {useCallback} from "react";
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {Form} from "../Form";
import {Message} from "../Message";
import {ChatList} from "../ChatList";
import {ChatListForm} from "../ChatListForm";
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/chats/selectors";
import {getMessageList} from "../../store/messages/selectors";
import {addChat, deleteChat} from "../../store/chats/action";
import {addMessages, deleteMessages, updateMessagesWithReply} from "../../store/messages/action";
import styles from "./Chat.module.scss";

export const Chat = () => {
  const navigate = useNavigate();
  const {chatId} = useParams();
  const dispatch = useDispatch();
  const chatList = useSelector(getChatList);
  const messagesList = useSelector(getMessageList)

  const updateMessagesList = useCallback(
    (newMessage) => {
      dispatch(updateMessagesWithReply(chatId, newMessage))
    },
    [chatId, dispatch]
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

  if (chatId && !(chatId in messagesList)) {
    return <Navigate replace to="/chat"/>;
  }

  return (
    <div className={styles.chat}>
      <div className={styles.list}>
        <ChatList chatList={chatList} removeItem={removeItem}/>
        <ChatListForm updateChatList={updateChatList}/>
      </div>
      {chatId && <div>
        <div className={styles.window}>
          <Message messageList={messagesList[chatId]} chatId={chatId}/>
        </div>
        <Form updateMessageList={updateMessagesList}/>
      </div>}
    </div>
  );
};
