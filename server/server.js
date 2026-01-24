import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import app from "./src/app.js";
import Message from "./src/models/Message.js";

dotenv.config();

const server = http.createServer(app);

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.set("io", io);



io.on("connection", (socket) => {
  console.log("🟢 New socket connected:", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId);
    console.log(`👤 User ${userId} joined their private room`);
  });

  socket.on("sendMessage", async ({ senderId, receiverId, content }) => {
    try {
      const message = await Message.create({ senderId, receiverId, content });
      io.to(senderId).emit("messageReceived", message);
      io.to(receiverId).emit("messageReceived", message);
    } catch (error) {
      console.error("❌ Error saving message:", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
