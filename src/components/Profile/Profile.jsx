import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../../store/profile/actions";
// import {Checkbox, FormControlLabel, FormGroup,} from "@mui/material";
// import {getCheckboxValue} from "../../store/profile/selectors";
import {getName} from "../../store/profile/selectors";
import {logOut, userRef} from "../../services/firebase";
import {useEffect, useState} from "react";
import {onValue, set} from "firebase/database"

export const Profile = () => {
  // const checkboxValue = useSelector(getCheckboxValue);
  const name = useSelector(getName);
  const [value, setValue] = useState(name);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      dispatch(changeName(userData?.name || ''));
    });
    return () => unsubscribe();
  }, [dispatch]);

  // const handleChange = () => {
  //   dispatch(toggleCheckbox)
  // };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeText = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    set(userRef, {
      name: value,
    });
  };

  return (
    <div>
      <h2>Profile</h2>
      {/*<FormGroup>*/}
      {/*  <FormControlLabel control={<Checkbox*/}
      {/*    checked={checkboxValue}*/}
      {/*    onChange={handleChange}*/}
      {/*    style ={{color: "#2196f3"}}/>}*/}
      {/*    label={name}/>*/}
      {/*</FormGroup>*/}
      <p>{name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeText}/>
        <button>submit</button>
      </form>
      <button onClick={handleSignOut}>sign out</button>
    </div>
  );
};
