import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleCheckbox} from "../../store/profile/action";
import {Checkbox, FormControlLabel, FormGroup,} from "@mui/material";

export const Profile = () => {
  const checkboxValue = useSelector((state) => state.checkbox);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleCheckbox)
  };

  return (
    <div>
      <h2>Profile</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox
          checked={checkboxValue}
          onChange={handleChange}
          style ={{color: "#2196f3"}}/>} label={name}/>
      </FormGroup>
    </div>
  );
};
