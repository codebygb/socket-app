import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CloseOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";
import "./ChatBar.css";

function ChatBar(props) {
  const { name, room } = props;
  const history = useHistory();

  return (
    <Paper elevation={2}>
      <AppBar position="static">
        <Toolbar>
          <div className={"chatbar"}>
            <Avatar className="avatar">{name.substr(0, 1)}</Avatar>

            <Typography variant="subtitle1" className="uname">
              {name}
            </Typography>
            <div />
            <Typography variant="subtitle1" className="rname">
              {room}
            </Typography>
            <IconButton
              onClick={() => history.push({ pathname: "/", state: [] })}
            >
              <CloseOutlined />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

ChatBar.propTypes = {
  name: PropTypes.string,
  room: PropTypes.string,
};

export default ChatBar;
