import { Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

function Input(props) {
  const { message, setMessage, sendMessage } = props;
  return (
    <>
      <TextField
        fullWidth
        className="message-input"
        label="Type Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") sendMessage(e);
        }}
      />
      <Button variant="contained" onClick={(e) => sendMessage(e)}>
        Send
      </Button>
    </>
  );
}

Input.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func,
};

export default Input;
