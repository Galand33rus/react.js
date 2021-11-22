import {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {List, ListItem, ListItemText} from "@mui/material";
import styles from "./ChatList.module.scss"


export const ChatList = ({chatList, removeItem}) => {
  const scroll = useRef();
  const delChat = event => {
    removeItem(event.target.value)
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior: "auto"});
  });

  return (
    <div>
      <div className={styles.chat}>
        <p className={styles.title}>list of chats</p>
        <List>
          {chatList.map(chat => <ListItem key={chat.id}>
            <ListItemText primary={
              <NavLink
                ref={scroll}
                style={({isActive}) => ({color: isActive ? "#2196f3" : "white"})}
                to={`/chat/${chat.id}`}>
                {chat.name}
              </NavLink>
            }/>
            <button className={styles.delete} onClick={delChat} value={chat.id}>delete
            </button>
          </ListItem>)
          }
        </List>
      </div>
    </div>
  );
};
