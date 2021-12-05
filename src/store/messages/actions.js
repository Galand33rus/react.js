import {AUTHORS} from "../../utils/constants";
import {v4 as uuidv4} from "uuid";
import {onValue, push} from "firebase/database";
import {getCurrentMessagesList, messagesRef} from "../../services/firebase";

export const ADD_MESSAGES = "MESSAGES::ADD_MESSAGES";
export const DELETE_MESSAGES = "MESSAGES::DELETE_MESSAGES";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessages = (chatId) => ({
  type: ADD_MESSAGES,
  payload: chatId
});

export const updateMessages = (chatId, message) => ({
  type: UPDATE_MESSAGES,
  payload: {
    chatId,
    message
  }
});

export const deleteMessages = (id) => ({
  type: DELETE_MESSAGES,
  payload: id,
});

export const deleteMessage = (chatId, id) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    id,
  },
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

let timer;

export const updateMessagesWithReply = (chatId, message) => (dispatch) => {
  dispatch(updateMessages(chatId, message))

  if(message.author !== AUTHORS.bot) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      const botMessage = {
        author: AUTHORS.bot,
        text: "I'm a bot",
        id: uuidv4(),
      }
      // dispatch(updateMessages(chatId, botMessage));
      push(getCurrentMessagesList(chatId), botMessage);
    }, 1000)
  }
}

export const initMessagesTracking = () => (dispatch) => {
    onValue(messagesRef, ((snapshot) => {
      const newMsg = {};
      snapshot.forEach((snapshot) => {
        newMsg[snapshot.key] = Object.values(snapshot.val().messageList || {});
      })
      console.log(newMsg)
      dispatch(setMessages(newMsg));
    }));

};
