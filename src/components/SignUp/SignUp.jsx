import {SingForm} from "../SignForm";
import {Link} from "react-router-dom";
import {signUp} from "../../services/firebase";
import {useState} from "react";


export const SignUp = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (email, pass) => {
    setLoading(true);
    try{
      await signUp(email, pass);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SingForm onSubmit={handleSignUp} error={error} loading={loading}/>
      <Link to="/">Sign In</Link>
    </div>
  );
};


