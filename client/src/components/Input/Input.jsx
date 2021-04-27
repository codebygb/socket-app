import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 0,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Input(props) {
  const classes = useStyles();
  const { message, setMessage, sendMessage } = props;

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Send Message"
        inputProps={{ "aria-label": "send message" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") sendMessage(e);
        }}
      />

      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="send"
        onClick={(e) => sendMessage(e)}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
}
