import React, {useState, useRef} from 'react';
import {TextField, Button} from "@mui/material";
import {styled} from '@mui/material/styles';
// import FormControl, {useFormControl} from '@mui/material/FormControl';
// import {StyledEngineProvider} from '@mui/material/styles';
import './Form.scss';

export const Form = ({updateMessageList}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#ff4400',
  //     },
  //     secondary: {
  //       light: '#0066ff',
  //       main: '#0044ff',
  //       contrastText: '#ffcc00',
  //     },
  //   },
  // });

  const handleMessageChange = event => {
    setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== '') {
      updateMessageList(value);
      setValue('');
      inputRef.current?.focus();
    }
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-root': {
      //color: '#2196f3',
      color: 'rgba(255,255,255, .7)',
    },
    color: 'rgba(255,255,255, .7)',
    '& label.Mui-focused': {
      color: '#2196f3',
      // color: 'red',
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
        // boxShadow: '0 0 10px #2196f3'
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

  return <form className="form" onSubmit={handleSubmit}>
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

    <CssTextField
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




