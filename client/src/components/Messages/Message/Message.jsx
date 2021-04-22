import { Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";

export default function Messages(props) {
  const { message, currUser, key } = props;
  const { user, ts, text } = message;
  const [isCurrUser] = useState(currUser === user);

  return isCurrUser ? (
    <Paper key={ts} variant="outlined" className="my-messages">
      <Typography>You</Typography>
      <Typography>{text}</Typography>
    </Paper>
  ) : (
    <Paper key={ts} variant="outlined" className="other-messages">
      <Typography>{user}</Typography>
      <Typography>{text}</Typography>
    </Paper>
  );
}
