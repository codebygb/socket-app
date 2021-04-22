import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import "./Chat.css";

let socket;
const ENDPOINT = "localhost:5000";

function Chat() {
  const location = useLocation();

  const state = location.state;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", state, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, state]);

  useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]));
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);
  return (
    <div>
      <div>
        <TextField
          label="Type Message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage(e);
          }}
        />
      </div>
    </div>
  );
}

Chat.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  room: PropTypes.string,
  setRoom: PropTypes.func,
};
export default Chat;
