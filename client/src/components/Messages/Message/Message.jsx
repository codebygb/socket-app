import React, { useState } from "react";
import "./Message.css";

export default function Message(props) {
  const { message, currUser } = props;
  const { user, ts, text } = message;
  const [isCurrUser] = useState(currUser === user);

  return isCurrUser ? (
    <div key={ts} className="message-you">
      <div className="sender">You</div>
      <div className="response">{text}</div>
    </div>
  ) : (
    <div key={ts} className="message-other">
      <div className="sender">{user}</div>
      <div className="response">{text}</div>
    </div>
  );
}
