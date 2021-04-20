import React, { useState } from "react";

import Join from "../Join/Join";
import Chat from "../Chat/Chat";

export default function ChatRoom(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [openRoom, setOpenRoom] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRoomChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    if (!(name && room)) {
      setOpenRoom(true);
    }
  }
  return !openRoom ? (
    <Join
      name={name}
      setName={setName}
      room={room}
      setRoom={setRoom}
      handleNameChange={handleNameChange}
      handleRoomChange={handleRoomChange}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Chat />
  );
}
