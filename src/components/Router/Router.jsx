import {Routes, Route} from "react-router-dom";
import {Home} from "../Home";
import {Chat} from "../Chat";
import {Profile} from "../Profile";
import {Articles} from "../Articles";

export const Router = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="chat">
        <Route index element={<Chat/>}/>
        <Route path=":chatId" element={<Chat/>}/>
      </Route>
      <Route path="articles" element={<Articles/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  );
};
