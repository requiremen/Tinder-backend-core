const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: String,
  age: Number
});

module.exports = mongoose.model("users", userschema);
