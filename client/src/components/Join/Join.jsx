import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Join.css";
import rocket from "../../images/rocket.png";
import chat from "../../images/chat.png";

function Join() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRoomChange(e) {
    setRoom(e.target.value);
  }

  function handleSubmit() {
    if (name && room) {
      history.push({ pathname: "/Chat", state: { name, room } });
    }
  }

  return (
    <div className="container">
      <div className="img">
        <img src={chat} alt="login-chat-img" className="login-chat" />
      </div>
      <div className="login-content">
        <img src={rocket} alt="login-rocket-img" className="login-rocket" />
        <div className="login-form">
          <div className="input">
            <TextField
              size="medium"
              variant="outlined"
              label="Name"
              className="input"
              type="text"
              onChange={handleNameChange}
              id="name"
            />
          </div>
          <div className="input">
            <TextField
              variant="outlined"
              className="input"
              label="Room"
              type="text"
              onChange={handleRoomChange}
              id="room"
            />
          </div>
          <Button
            className="button"
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Join;
