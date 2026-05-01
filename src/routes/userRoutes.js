const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/currentuser", authMiddleware, userController.getCurrentUser);
router.put("/updateuser", authMiddleware, userController.updateUser);
router.get("/test", authMiddleware, userController.testRoute);

module.exports = router;
