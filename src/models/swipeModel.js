const mongoose = require("mongoose");

const swipeschema = new mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    type: {
        type: String,
        enum: ["like", "dislike"],
        required: true
    }
});

module.exports = mongoose.model("swipes", swipeschema);
