import {ADD_MESSAGES, DELETE_MESSAGES, UPDATE_MESSAGES} from "./action";

const initialMessageList = {};

export const messagesReducer = (state = initialMessageList, {type, payload}) => {
  switch (type) {
    case UPDATE_MESSAGES:
      return ({
          ...state,
          [payload.chatID]: [...state[payload.chatID], payload.message]
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
    default:
      return state;
  }
};
