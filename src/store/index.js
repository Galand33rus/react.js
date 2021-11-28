import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {profileReducer} from "./profile/reducer";
import {chatReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import {articlesReducer} from "./articles/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const config = {
  key: 'react-data',
  storage,
  blacklist: ["articles", "chats", "messages"],
};

const persistedReducer = persistReducer(
  config,
  combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messagesReducer,
    articles: articlesReducer,
  })
);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistent = persistStore(store);




