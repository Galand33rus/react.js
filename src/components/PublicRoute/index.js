import {useSelector} from "react-redux";
import {selectAuth} from "../../store/profile/selectors";
import {Navigate} from "react-router-dom";


export const PublicRoute = ({ children }) => {
  const authed = useSelector(selectAuth);

  return !authed ? children : <Navigate to="/chat" replace />;
};
