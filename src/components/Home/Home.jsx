// import {useDispatch} from "react-redux";
import {SingForm} from "../SignForm";
import {Link} from "react-router-dom";
import {logIn} from "../../services/firebase";
import {useState} from "react";

export const Home = () => {

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  const handleSignIn = async (email, pass) => {
    setLoading(true);
    try{
      await logIn(email, pass);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <SingForm onSubmit={handleSignIn} error={error} loading={loading}/>
      {/*<button onClick={handleSignIn}></button>*/}
      <Link to="/signup">Sign UP</Link>
    </div>
  );
};
