// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import ChatBar from "../ChatBar/ChatBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import "./Chat.css";

let socket;

const ENDPOINT = process.env.REACT_APP_SERVERURL;
console.log(ENDPOINT);

function Chat() {
  const location = useLocation();

  const { name, room } = location.state;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("left");
      socket.off();
    };
  }, [ENDPOINT, name]);

  useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]));
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="root-container">
      <div className="chat-container">
        <div className="contacts-container"></div>
        <div className="messages-container">
          <div className="header">
            <ChatBar name={name} room={room} />
          </div>
          <div className="message-layout">
            <Messages messages={messages} currUser={name} />
          </div>
          <div className="message-input">
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
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
