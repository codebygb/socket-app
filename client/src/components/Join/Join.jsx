import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./Join.css";

export default function Join(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRoomChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    if (!(name && room)) {
      e.preventDefault();
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <div>
          <h1>Join</h1>
        </div>
        <div>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            className="input"
            type="text"
            onChange={handleNameChange}
            id="name"
          />
        </div>
        <div>
          <TextField
            fullWidth
            variant="outlined"
            className="input"
            label="Room"
            type="text"
            onChange={handleNameChange}
            id="room"
          />
        </div>
        <div>
          <Link onClick={handleSubmit} to={`/chat?name=${name}&room=${room}`}>
            <Button className="button" variant="outlined" color="primary">
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
