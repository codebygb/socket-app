import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";

export default function Contacts(props) {
  const { users } = props;
  return (
    <List style={{ maxHeight: "100%" }}>
      {users.map((user) => (
        <div key={user.id}>
          <ListItem>
            <ListItemAvatar>{user.name.substr(0, 1)}</ListItemAvatar>
            <ListItemText primary={user.name} secondary="Online" />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}
