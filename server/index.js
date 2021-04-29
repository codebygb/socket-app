const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST"],
  },
  pingInterval: 10000,
  pingTimeout: 5000,
});

const PORT = process.env.PORT || 5000;

const router = require("./router");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./users/users");

app.use(cors());
app.use(router);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, cb) => {
    const { user, error } = addUser(socket.id, name, room);

    if (error) return cb(error);

    socket.emit("message", {
      user: "admin",
      text: `Welcome to ${room}, ${name}`,
      ts: +new Date(),
    });

    socket.join(room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    socket.broadcast.to(room).emit("message", {
      user: "admin",
      text: `${name} has joined.`,
      ts: +new Date(),
    });
    cb();
  });

  socket.on("sendMessage", (message, cb) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
      ts: +new Date(),
    });
    cb();
  });

  socket.on("left", () => {
    const user = removeUser(socket.id);
    if (user) {
      socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
        ts: +new Date(),
      });
      socket.broadcast.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
        ts: +new Date(),
      });
      socket.broadcast.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(PORT, () => {
  console.log("Started");
});
