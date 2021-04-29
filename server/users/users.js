const users = [];

const addUser = (id, username, room) => {
  const uname = username.replace(" ", "").toLowerCase();

  if (users.findIndex((u) => u.name === uname) !== -1) {
    return { error: "Username already taken." };
  }

  const user = { name: username, room, id };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index > -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((u) => u.id === id);

const getUsersInRoom = (room) => users.filter((u) => u.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
