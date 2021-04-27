import React, { Fragment } from "react";
import Message from "./Message/Message";

export default function Messages(props) {
  const { messages, currUser } = props;
  return (
    <div className="messages">
      {messages.map((m) => (
        <Fragment key={m.ts}>
          <Message currUser={currUser} message={m} />
        </Fragment>
      ))}
    </div>
  );
}
