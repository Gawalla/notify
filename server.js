import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST"],
    credentials: true, // Set this to true if you're dealing with cookies or authentication
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  socket.emit("welcome", "hii welcome to world chat");
  socket.on("sendMessage", (message) => {
    console.log(message + " message recievd from user");
    socket.emit("response", `${message} from server`);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3001, () => {
  console.log("Server is running on port 3000");
});
