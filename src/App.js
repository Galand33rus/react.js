import './App.scss';
import {Message} from './components/Message/Message';
import {useState, useEffect, useRef} from "react";
import {Form} from "./components/Form/Form";
import {v4 as uuidv4} from 'uuid';
import {AUTHORS} from "./utils/constants"
import {ListChats} from "./components/List/List";

function App() {

  const [messageList, setMessageList] = useState([]);
  const [chatList] = useState([
    {name: 'tempChatName1', id: uuidv4()},
    {name: 'tempChatName2', id: uuidv4()},
    {name: 'tempChatName3', id: uuidv4()},
  ]);
  const scroll = useRef();

  const updateMessageList = value => {
    setMessageList([...messageList, {
      author: AUTHORS.user,
      text: value,
      id: uuidv4()
    }]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messageList[messageList.length - 1] && messageList[messageList.length - 1].author !== AUTHORS.bot) {
        setMessageList([...messageList, {
          author: AUTHORS.bot,
          text: "I'm a bot",
          id: uuidv4()
        }
        ]);
      }
    }, 1500);
    return () => clearTimeout(timer)
  }, [messageList]);

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "auto"});
    // scroll.current?.scrollIntoView(false);
  });


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Chat</h1>
      </header>
      <main className="App-main">
        <div className="chat-list">
          <p className="chat-list__title">list of chats</p>
          <ListChats chatList={chatList}/>
        </div>
        <div className="chat-wrapper">
          <div className="chat" ref={scroll}>
            <Message messageList={messageList}/>
          </div>
          <Form updateMessageList={updateMessageList}/>
        </div>

      </main>
    </div>
  );
}

export default App;
