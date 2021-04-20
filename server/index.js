const PORT = process.env.PORT || 5000;
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "PUT", "POST"],
  },
});

const router = require("./router");

app.use(cors());
app.use(router);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, cb) => {
    console.log(`Connected ${name} to ${room}`);
  });
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Started");
});
