import {AUTHORS} from "../../utils/constants";
import {v4 as uuidv4} from "uuid";

export const ADD_MESSAGES = "MESSAGES::ADD_MESSAGES";
export const DELETE_MESSAGES = "MESSAGES::DELETE_MESSAGES";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

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
      dispatch(updateMessages(chatId, botMessage))
    }, 1000)
  }
}
