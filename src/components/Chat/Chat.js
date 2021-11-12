import React, {useEffect, useState, useCallback} from "react";
import {AUTHORS} from "../../utils/constants";
import {v4 as uuidv4} from "uuid";
import {Form} from "../Form/Form";
import {Message} from "../Message/Message";
import "./Chat.scss"
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {ChatList} from "../ChatList/ChatList";
import {ChatListForm} from "../ChatListForm/ChatListForm";

export const Chat = () => {
  const navigate = useNavigate();
  const {chatId} = useParams()
  const [chatList, setChatList] = useState([
    {name: 'Chat 1', id: 'chat1'},
    {name: 'Chat 2', id: 'chat2'},
    {name: 'Chat 3', id: 'chat3'},
  ]);
  const [messageList, setMessageList] = useState({});

  const updateMessageList = useCallback(
    (newMessage) => {
      setMessageList((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    },
    [chatId]
  );

  const updateChatList = newChat => {
    setChatList([...chatList, newChat])
    setMessageList((messageList) => ({
      ...messageList,
      [newChat.id]: []
    }))

  };
  const removeItem = item => {
    setChatList(chatList.filter(n => n.id !== item));
    if (item === chatId) {
      navigate("/chat")
    }
  };

  const initialStateMessageList = (chatList) => {
    if (Object.keys(messageList).length === 0) {
      for (let i = 0; i < chatList.length; i++) {
        setMessageList((messageList) => ({
          ...messageList,
          [chatList[i].id]: []
        }))
      }
    }
  };

  useEffect(() => {
    initialStateMessageList(chatList);
  })

  useEffect(() => {
    console.log(chatList)
    console.log(messageList)
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messageList[chatId]?.length &&
        messageList[chatId][messageList[chatId]?.length - 1].author !== AUTHORS.bot) {
        updateMessageList({
          author: AUTHORS.bot,
          text: "I'm a bot",
          id: uuidv4()
        })
      }
    }, 1000);
    return () => clearTimeout(timer)
  }, [messageList[chatId]]);

  if (chatId && !(chatId in messageList)) {
    return <Navigate replace to="/chat"/>;
  }

  return (
    <div className="chat">
      <div className="chat-list-window">
        <ChatList chatList={chatList} removeItem={removeItem}/>
        <ChatListForm updateChatList={updateChatList}/>
      </div>
      {chatId && <div className="chat-wrapper">
        <div className="chat-window">
          <Message messageList={messageList[chatId]}/>
        </div>
        <Form updateMessageList={updateMessageList}/>
      </div>}
    </div>
  );
};
