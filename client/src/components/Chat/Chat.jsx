// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import ChatBar from "../ChatBar/ChatBar";
import Contacts from "../Contacts/Contacts";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import "./Chat.css";

let socket;

const ENDPOINT = process.env.REACT_APP_SERVERURL || "localhost:5000";
console.log(ENDPOINT);

function Chat() {
  const location = useLocation();
  const ref = useRef(null);

  const { name, room } = location.state;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});
    return () => {
      // socket.emit("left");
      socket.off();
    };
  }, [ENDPOINT, name]);

  useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]));
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => setUsers(users));
  }, [users]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="root-container">
      <div className="chat-container">
        <div className="contacts-container">
          <Contacts users={users} />
        </div>
        <div className="messages-container">
          <div className="header">
            <ChatBar name={name} room={room} />
          </div>
          <div className="message-layout" ref={ref}>
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
