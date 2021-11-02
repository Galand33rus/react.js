import './App.scss';
import {Message} from './components/Message/Message';
import {useState, useEffect} from "react";
import {Form} from "./components/Form/Form";

function App() {

  const [messageList, setMessageList] = useState([]);

  const updateMessageList = value => {
    setMessageList([...messageList, {
      author: 'User',
      text: value
    }]);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        if (messageList[messageList.length - 1] && messageList[messageList.length - 1].author !== "Bot") {
          setMessageList([...messageList, {
            author: "Bot",
            text: "I'm a bot"
          }
          ]);
        }
      }, 1500);

      return () => clearTimeout(timer)

  }, [messageList]);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Chat</h1>
      </header>
      <main className="App-main">
        <dir className="chat">
          <Message messageList={messageList}/>
        </dir>
        <Form updateMessageList={updateMessageList}/>
      </main>
    </div>
  );
}

export default App;
