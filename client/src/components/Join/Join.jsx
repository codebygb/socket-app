import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Join.css";

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
    <div className="main-container">
      <div className="container">
        <div>
          <h1>JOIN</h1>
        </div>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          className="input"
          type="text"
          onChange={handleNameChange}
          id="name"
        />
        <TextField
          fullWidth
          variant="outlined"
          className="input"
          label="Room"
          type="text"
          onChange={handleRoomChange}
          id="room"
        />
        <Button
          fullWidth
          className="button"
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Join;
