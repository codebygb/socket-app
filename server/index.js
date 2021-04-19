const PORT = process.env.PORT || 5000;
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const router = require("./router");

app.use(router);

io.on("connection", (socket) => {
  console.log("Hello");
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Started");
});
