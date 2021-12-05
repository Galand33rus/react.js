import {useCallback, useEffect} from "react";
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {Form} from "../Form";
import {Message} from "../Message";
import {ChatList} from "../ChatList";
import {ChatListForm} from "../ChatListForm";
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "../../store/chats/selectors";
import {getMessageList} from "../../store/messages/selectors";
import {addChatWithFb, deleteChatWithFb, initChatsTracking} from "../../store/chats/actions";
import {initMessagesTracking, updateMessagesWithReply} from "../../store/messages/actions";
import {push} from "firebase/database";
import {getCurrentMessagesList} from "../../services/firebase";
import styles from "./Chat.module.scss";

export const Chat = () => {
  const navigate = useNavigate();
  const {chatId} = useParams();
  const dispatch = useDispatch();
  const chatList = useSelector(getChatList);
  const messagesList = useSelector(getMessageList);

  useEffect(() => {
    // const unsubscribe = onValue(chatsRef, (snapshot) => {
    //   const newChats = [];
    //   snapshot.forEach((snapshot) => {
    //     newChats.push(snapshot.val());
    //   })
    //   setChats(newChats);
    //   console.log(newChats);
    //   dispatch(addChat(newChats));
    //   return () => unsubscribe();
    // });
    dispatch(initChatsTracking());
  }, [dispatch]);

  useEffect(() => {
    //   const unsubscribe = onValue(messagesRef, ((snapshot) => {
    //     const newMsg = {};
    //     snapshot.forEach((snapshot) => {
    //       newMsg[snapshot.key] = Object.values(snapshot.val().messageList || {});
    //     })
    //     console.log(newMsg)
    //     setMsg(newMsg);
    //     return () => unsubscribe();
    //   }));
    dispatch(initMessagesTracking());
  }, [dispatch]);

  const updateMessagesList = useCallback(
    (newMessage) => {
      dispatch(updateMessagesWithReply(chatId, newMessage));
      push(getCurrentMessagesList(chatId), newMessage);
    },
    [chatId, dispatch]
  );

  const updateChatList = newChat => {
    // dispatch(addChat(newChat));
    // dispatch(addMessages(newChat.id));
    // set(getCurrentChat(newChat.id), newChat);
    // set(getCurrentMessages(newChat.id), { empty: true });
    dispatch(addChatWithFb(newChat));
  };
  const removeItem = id => {
    dispatch(deleteChatWithFb(id));
    // dispatch(deleteChat(id))
    // dispatch(deleteMessages(id))

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
