import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {Router} from "./components/Router/Router"
import "./App.scss";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <ul className="Navigate">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chat">Chats</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </header>
          <main className="App-main">
            <Router />
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
