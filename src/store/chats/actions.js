import {onValue, set} from "firebase/database";
import {chatsRef, getCurrentChat, getCurrentMessages} from "../../services/firebase";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const addChatWithFb = (newChat) => () => {
  set(getCurrentMessages(newChat.id), { empty: true });
  set(getCurrentChat(newChat.id), newChat);
};

export const deleteChatWithFb = (id) => () => {
  set(getCurrentChat(id), null);
  set(getCurrentMessages(id), null);

};

export const initChatsTracking = () => (dispatch) => {
  onValue(chatsRef, (snapshot) => {
    const newChats = [];

    snapshot.forEach((snapshot) => {
      newChats.push(snapshot.val());
    });

    dispatch(setChats(newChats));
  });
};
