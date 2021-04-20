import React from "react";

import { TextField, Button } from "@material-ui/core";
import PropTypes from "prop-types";

import "./Join.css";

function Join(props) {
  const { handleNameChange, handleRoomChange, handleSubmit } = props;

  return (
    <div className="main-container">
      <div className="container">
        <div>
          <h1>JOIN</h1>
        </div>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          className="input"
          type="text"
          onChange={handleNameChange}
          id="name"
        />
        <TextField
          fullWidth
          variant="outlined"
          className="input"
          label="Room"
          type="text"
          onChange={handleRoomChange}
          id="room"
        />
        <Button
          fullWidth
          className="button"
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

Join.propTypes = {
  handleNameChange: PropTypes.func,
  handleRoomChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Join;
