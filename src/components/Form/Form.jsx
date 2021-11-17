import {useState, useRef, useCallback} from "react";
import {TextField, Button} from "@mui/material";
import {styled} from '@mui/material/styles';
import {v4 as uuidv4} from "uuid";
import {AUTHORS} from "../../utils/constants";
import "./Form.scss";

export const Form = ({updateMessageList}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleMessageChange = useCallback((event) => {
    setValue(event.target.value)
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== '') {
      updateMessageList({
              author: AUTHORS.user,
              text: value,
              id: uuidv4()
      });
      setValue('');
      inputRef.current?.focus();
    }
  }

  const StyledTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
      color: '#2196f3',
    },
    '& label.Mui-focused': {
      color: '#2196f3',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      color: 'rgba(255,255,255)',
      '& fieldset': {
        borderColor: '#2196f3',
      },
      '&:hover fieldset': {
        borderColor: '#2196f3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2196f3',
      },
    },
  });

  const StyledButton = styled(Button)({
    width: 800,
    color: '#fff',
    marginTop: 20,
    boxShadow: 'none',
    textTransform: 'uppercase',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#2196f3',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2196f3',
      borderColor: '#005cbf',
    },
  });

  return <form className="form" onSubmit={handleSubmit} >
      <StyledTextField
        id="outlined-basic"
        label="Enter a message"
        autoComplete="off"
        variant="outlined"
        autoFocus={true}
        value={value}
        ref={inputRef}
        margin="normal"
        color="primary"
        onChange={handleMessageChange}/>
      <StyledButton type="submit" margin="normal">send</StyledButton>
  </form>;
};




