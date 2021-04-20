import React, { useEffect } from "react";
import { io } from "socket.io-client";
import PropTypes from "prop-types";

import "./Chat.css";

let socket;
const ENDPOINT = "localhost:5000";

function Chat(props) {
  const { name, setName, room, setRoom } = props;

  useEffect(() => {
    console.log("INIO");
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {
      console.log("Hello" + name);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name]);

  return <h1>Chat</h1>;
}

Chat.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  room: PropTypes.string,
  setRoom: PropTypes.func,
};
export default Chat;
