import {useDispatch, useSelector} from "react-redux";
import {toggleCheckbox} from "../../store/profile/action";
import {Checkbox, FormControlLabel, FormGroup,} from "@mui/material";
import {getCheckboxValue} from "../../store/profile/selectors";
import {getName} from "../../store/profile/selectors";

export const Profile = () => {
  const checkboxValue = useSelector(getCheckboxValue);
  const name = useSelector(getName);
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
          style ={{color: "#2196f3"}}/>}
          label={name}/>
      </FormGroup>
    </div>
  );
};
