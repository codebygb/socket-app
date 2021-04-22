import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

let socket;
const ENDPOINT = "localhost:5000";

function Chat(props) {
  const { name, room } = props;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name]);

  useEffect(() => {
    socket.on("message", (message) =>
      setMessages((prev) => [...prev, message])
    );
  }, [messages]);

  return <h1>Chat</h1>;
}

Chat.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  room: PropTypes.string,
  setRoom: PropTypes.func,
};
export default Chat;
