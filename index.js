require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connect");
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Todo API Services");
});

const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

const startServer = async () => {
  const isConnected = await connectDB();

  if (!isConnected) {
    console.error("Failed to connect to MongoDB. Server not started.");
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
};

startServer();
