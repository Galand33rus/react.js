import {useState} from "react";


export const SingForm = ({onSubmit, error, loading}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPass(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, pass);
    setEmail('');
    setPass('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleChangeEmail}/>
        <input type="password" value={pass} onChange={handleChangePass}/>
        <button disabled={loading}>click</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};
