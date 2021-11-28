import {Routes, Route} from "react-router-dom";
import {Home} from "../Home";
import {Chat} from "../Chat";
import {Profile} from "../Profile";
import {Articles} from "../Articles";
import {PublicRoute} from "../PublicRoute";
import {PrivateRoute} from "../PrivateRoute";
import {SignUp} from "../SignUp";
import {useEffect} from "react";
import {auth} from "../../services/firebase";
import {useDispatch} from "react-redux";
import {signIn, signOut} from "../../store/profile/actions";


export const Router = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    })
    return () => unsubscribe();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
      <Route exact path="/" element={<PublicRoute><Home/></PublicRoute>}/>
      <Route exact path="signup" element={<PublicRoute><SignUp/></PublicRoute>}/>
      <Route path="chat">
        <Route index element={<PrivateRoute><Chat/></PrivateRoute>}/>
        <Route path=":chatId" element={<PrivateRoute><Chat/></PrivateRoute>}/>
      </Route>
      <Route path="articles" element={<Articles/>}/>
      <Route path="profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  );
};
