const users = [];

const addUser = (id, username, room) => {
  const uname = username.replace(" ", "").toLowerCase();
  const rname = room.replace(" ", "").toLowerCase();

  if (users.findIndex((u) => u.name === uname) !== -1) {
    return { error: "Username already taken." };
  }

  const user = { name: uname, room: rname, id };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  return users.filter((u) => u.id !== id);
};

const getUser = (id) => users.find((u) => u.id === id);

const getUserInRoom = (room) => users.filter((u) => u.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
