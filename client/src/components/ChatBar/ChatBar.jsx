import IconButton from "@material-ui/core/IconButton";
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
    <div>
      <div className="chatbar">
        <div className="avatar">
          <div className="circle">
            <span className="initials">{name.substr(0, 1)}</span>
          </div>
        </div>
        <div className="info">
          <Typography component="div" variant="subtitle1" className="uname">
            {name}
          </Typography>
          <Typography component="div" variant="subtitle1" className="rname">
            {room}
          </Typography>
        </div>
        <div className="close">
          <IconButton
            onClick={() => history.push({ pathname: "/", state: [] })}
          >
            <CloseOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

ChatBar.propTypes = {
  name: PropTypes.string,
  room: PropTypes.string,
};

export default ChatBar;
