export const ADD_MESSAGES = "MESSAGES::ADD_MESSAGES";
export const DELETE_MESSAGES = "MESSAGES::DELETE_MESSAGES";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";

export const addMessages = (chatID) => ({
  type: ADD_MESSAGES,
  payload: chatID
});

export const updateMessages = (chatID, message) => ({
  type: UPDATE_MESSAGES,
  payload: {chatID, message}
});

export const deleteMessages = (id) => ({
  type: DELETE_MESSAGES,
  payload: id,
});
