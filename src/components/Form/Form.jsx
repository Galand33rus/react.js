import React, {useState, useRef, useCallback} from 'react';
import {TextField, Button} from "@mui/material";
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
// import FormControl, {useFormControl} from '@mui/material/FormControl';
// import {StyledEngineProvider} from '@mui/material/styles';
import './Form.scss';

export const Form = ({updateMessageList}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#fff',
      },
    },
  });

  const handleMessageChange = useCallback((event) => {
    console.log(event.target.value)
    setValue(event.target.value)
    // setValue((prevMessages) => event);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== '') {
      updateMessageList(value);
      setValue('');
      inputRef.current?.focus();
    }
  }

  const StyledTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
      // color: 'rgba(255,255,255, .4)'
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
    width: 550,
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
    {/*<TextField*/}
    {/*  id="outlined-basic"*/}
    {/*  label="Enter a message"*/}
    {/*  variant="outlined"*/}
    {/*  autoComplete="off"*/}
    {/*  autoFocus={true}*/}
    {/*  value={value}*/}
    {/*  ref={inputRef}*/}
    {/*  margin="normal"*/}
    {/*  color="primary"*/}
    {/*  onChange={handleMessageChange}/>*/}

    {/*<input*/}
    {/*  className="input"*/}
    {/*  type="text"*/}
    {/*  placeholder="Enter a message"*/}
    {/*  value={value}*/}
    {/*  onChange={handleMessageChange}*/}
    {/*  ref={inputRef}*/}
    {/*  autoFocus={true}/>*/}
    {/*<button*/}
    {/*  className="button"*/}
    {/*  type="submit">*/}
    {/*    send*/}
    {/*</button>*/}
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>



  </form>;
};




