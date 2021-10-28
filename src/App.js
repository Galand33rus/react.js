import logo from './logo.svg';
import newLogo from '../src/assets/wolf.jpg';
import './App.css';
import { Message } from './components/Message/Message';

function App() {

  const message = "transmitted text";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message={message} />
        <img src={newLogo} className="wolf" alt="wolf" />
      </header>
    </div>
  );
}

export default App;
