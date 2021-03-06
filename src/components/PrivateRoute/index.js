import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {selectAuth} from "../../store/profile/selectors";

export const PrivateRoute = ({ children }) => {
  const authed = useSelector(selectAuth);

  return authed ? children : <Navigate to="/" replace />;
};
