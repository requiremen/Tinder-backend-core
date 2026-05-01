require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const swipeRoutes = require("./routes/swipeRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error while connecting to the database:", err.message);
    }
};
connectDB();

// Routes
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", swipeRoutes);

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

module.exports = app;
