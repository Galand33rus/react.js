import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {ref, getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAU6KUMxsWOQWatTO7u_0NS_M1h1J9-OLM",
  authDomain: "react-messenger-bd529.firebaseapp.com",
  databaseURL: "https://react-messenger-bd529-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-messenger-bd529",
  storageBucket: "react-messenger-bd529.appspot.com",
  messagingSenderId: "351390732969",
  appId: "1:351390732969:web:af19a64bfd9de694148fb8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass);
export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass);
export const logOut = async () => await signOut(auth);
export const database = getDatabase(app);
export const userRef = ref(database, 'user');
export const chatsRef = ref(database, 'chats');
export const messagesRef = ref(database, 'messages');
export const getCurrentChat = (id) => ref(database, `chats/${id}`);
export const getCurrentMessages = (chatId) => ref(database, `messages/${chatId}`);
export const getCurrentMessagesList = (chatId) => ref(database, `messages/${chatId}/messageList`);
