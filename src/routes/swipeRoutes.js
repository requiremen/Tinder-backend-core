const express = require("express");
const router = express.Router();
const swipeController = require("../controllers/swipeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/swipe", authMiddleware, swipeController.swipe);

module.exports = router;
