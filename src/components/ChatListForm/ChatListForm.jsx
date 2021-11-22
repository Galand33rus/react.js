import {useState, useCallback} from "react";
import {TextField, Button} from "@mui/material";
import {styled} from '@mui/material/styles';
import {v4 as uuidv4} from "uuid";

export const ChatListForm = ({updateChatList}) => {
  const [value, setValue] = useState('');

  const handleMessageChange = useCallback((event) => {
    setValue(event.target.value)
  }, []);

  const addNewChat = event => {
    event.preventDefault();
    if (value !== '') {
      updateChatList({name: value, id: uuidv4()})
      setValue('');
    }
  };

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
      width: 300,
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
    width: 300,
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

  return (
    <form className="form" onSubmit={addNewChat}>
    <StyledTextField
      id="outlined-basic"
      label="Add a chat"
      variant="outlined"
      autoComplete="off"
      autoFocus={true}
      value={value}
      margin="normal"
      onChange={handleMessageChange}/>
    <StyledButton type="submit">add chat</StyledButton>
  </form>
  );
};




