import {ADD_MESSAGES, DELETE_MESSAGES, UPDATE_MESSAGES, DELETE_MESSAGE, SET_MESSAGES} from "./actions";

const initialMessageList = {};

export const messagesReducer = (state = initialMessageList, {type, payload}) => {
  switch (type) {
    case UPDATE_MESSAGES:
      return ({
          ...state,
          [payload.chatId]: [...state[payload.chatId], payload.message]
        });
    case ADD_MESSAGES:
      return ({
        ...state,
        [payload]: []
      });
    case DELETE_MESSAGES: {
          const newStore = {...state};
          delete newStore[payload];
          return newStore;
        }
    case DELETE_MESSAGE: {
      const newMessages = { ...state };
      newMessages[payload.chatId] = newMessages[payload.chatId].filter(({ id }) => id !== payload.id);
      return newMessages;
    }
    case SET_MESSAGES:
      return payload
    default:
      return state;
  }
};
