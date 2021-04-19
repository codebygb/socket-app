import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRoomChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="main-container">
      <div className="container">
        <div>
          <input
            placeholder="Name"
            className="name"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="room"
            type="text"
            onChange={handleRoomChange}
          />
        </div>
        <Link>
          <button className="button" />
        </Link>
      </div>
    </div>
  );
}
