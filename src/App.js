import './App.scss';
import {Message} from './components/Message/Message';
import {useState, useEffect} from "react";
import {Form} from "./components/Form/Form";

function App() {

  const [value, setValue] = useState('');
  const [message, setMessage] = useState({});
  const [messageList, setMessageList] = useState([]);

  const handleMessageChange = event => {
    setValue(event.target.value)
  };

  const updateMessageList = event => {
    event.preventDefault();
    setMessageList([...messageList, message]);
    setValue('');
  };

  useEffect(()=>{
    setMessage({
      author: 'User',
      text: value
    });
  }, [value]);

  useEffect(() => {
    if (messageList[messageList.length - 1] && messageList[messageList.length - 1].author !== "Bot") {
      setTimeout(() => {
        setMessageList([...messageList, {
            author: "Bot",
            text: "I'm a bot"
          }
        ]);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Chat</h1>
      </header>
      <main className="App-main">
        <dir className="chat">
          <Message message={messageList}/>
        </dir>
        <Form updateMessageList={updateMessageList} handleMessageChange={handleMessageChange} value={value}/>
      </main>
    </div>
  );
}

export default App;
