const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "PUT", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

const router = require("./router");

const {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
} = require("./users/users");

app.use(cors());
app.use(router);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, cb) => {
    const { user, error } = addUser(socket.id, user, name);
    if (error) return cb(error);
    socket.emit("message", {
      user: "admin",
      text: `Welcome to ${room}, ${user}`,
    });
    socket.broadcast
      .to(room)
      .emit("message", { user: "admin", text: `${user} has joined.` });
    socket.join(user.room);
  });
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Started");
});
