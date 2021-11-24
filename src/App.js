import {BrowserRouter, Link} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {Router} from "./components/Router"
import {Provider} from "react-redux";
import {persistent, store,} from "./store";
import "./App.scss";

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistent}>
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
                  <Link to="/articles">Articles</Link>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
