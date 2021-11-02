import './App.scss';
import {Message} from './components/Message/Message';
import {useState, useEffect, useRef} from "react";
import {Form} from "./components/Form/Form";
import {v4 as uuidv4} from 'uuid';
import {AUTHORS} from "./utils/constants"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function App() {

  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    {
    name: 'tempName',
    id: uuidv4()
    }
  ]);
  const scroll = useRef();
  const scrollToBottom = () => {
    // scroll.current?.scrollIntoView({behavior: "auto"});
    scroll.current?.scrollIntoView(false);
  }

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
    scrollToBottom();
  });


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Chat</h1>
      </header>
      <main className="App-main">
        <div className="chat-list">
          <p className="chat-list__title">list of chats</p>
          <List>
            <ListItem>
              Chat # 1
            </ListItem>
            <ListItem>
              Chat # 2
            </ListItem>
            <ListItem>
              Chat # 3
            </ListItem>
          </List>
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
