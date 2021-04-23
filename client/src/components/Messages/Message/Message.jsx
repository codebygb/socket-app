import { Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Message.css";

export default function Message(props) {
  const { message, currUser, key } = props;
  const { user, ts, text } = message;
  const [isCurrUser] = useState(currUser === user);

  return isCurrUser ? (
    <Paper key={ts} variant="outlined" className="message-you">
      <Typography>You</Typography>
      <Typography>{text}</Typography>
    </Paper>
  ) : (
    <Paper key={ts} variant="outlined" className="message-other">
      <Typography>{user}</Typography>
      <Typography>{text}</Typography>
    </Paper>
  );
}
