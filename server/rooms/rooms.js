const rooms = {};

addRoom = (id, room) => {
  if (rooms?.id) {
    return { error: "Room already exist" };
  }
};
