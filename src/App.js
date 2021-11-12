import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {Router} from "./components/Router/Router"
import {Provider} from "react-redux";
import {store} from "./store";
import "./App.scss";

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
