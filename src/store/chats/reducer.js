import {ADD_CHAT, DELETE_CHAT} from "./actions";

const initialChats = [];

export const chatReducer = (state = initialChats, {type, payload}) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload];
    case DELETE_CHAT:
      return state.filter(({id}) => id !== payload);
    default:
      return state;
  }
};
