import './App.scss';
import {Message} from './components/Message/Message';
import {useState, useEffect} from "react";

function App() {

  const [value, setValue] = useState('');
  const [message, setMessage] = useState({});
  const [messageList, setMessageList] = useState([]);

  const handleMessageChange = event => {
    setValue(event.target.value)
    setMessage({
      author: 'User',
      text: event.target.value
    });
  };

  const updateMessage = event => {
    event.preventDefault();
    setMessageList(messageList => ([...messageList, message]));
    setValue('');
  };

  useEffect(() => {
    console.log(messageList);
    // console.log(messageList[messageList.indexOf(message)]);
  }, [messageList]);

  useEffect(() => {
    if (messageList[messageList.length - 1] && messageList[messageList.length - 1].author !== "Bot") {
      setTimeout(() => {
        setMessageList([
          ...messageList, {
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
          <Message className="text-message" message={messageList}/>
        </dir>
        <form onSubmit={updateMessage}>
          <input className="input" type="text" placeholder="enter a message" value={value}
                 onChange={handleMessageChange}/>
          <button className="button" type="submit" onSubmit={updateMessage}>send</button>
        </form>
      </main>
    </div>
  );
}

export default App;
