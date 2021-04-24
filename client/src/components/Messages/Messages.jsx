import { Paper } from "@material-ui/core";
import React, { Fragment } from "react";
import Message from "./Message/Message";

export default function Messages(props) {
  const { messages, currUser } = props;
  return (
    <Paper className="messages">
      {messages.map((m) => (
        <Fragment key={m.ts}>
          <Message currUser={currUser} message={m} />
        </Fragment>
      ))}
    </Paper>
  );
}
