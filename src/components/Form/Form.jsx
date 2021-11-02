import React, {useState} from 'react';
import './Form.scss';

export const Form = ({ updateMessageList }) => {
  const [value, setValue] = useState('');

  const handleMessageChange = event => {
    setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== '') {
      updateMessageList(value);
      setValue('');
    }
  }

  return <form className="form" onSubmit={handleSubmit}>
    <input
      className="input"
      type="text"
      placeholder="Enter a message"
      value={value}
      onChange={handleMessageChange}
      autoFocus={true}/>
    <button
      className="button"
      type="submit">
        send
    </button>
  </form>;
};




