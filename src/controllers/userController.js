const userService = require("../services/userService");

const getCurrentUser = async (req, res) => {
    try {
        const user = await userService.getCurrentUser(req.userid);
        res.status(200).json({ username: user.username });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { bio, age } = req.body;
        const updatedUser = await userService.updateUser(req.userid, bio, age);
        res.status(200).json({
            username: updatedUser.username,
            bio: updatedUser.bio,
            age: updatedUser.age
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const testRoute = (req, res) => {
    res.status(200).json({
        msg: "this is a protected route",
        userid: req.userid,
        username: req.username
    });
};

module.exports = { getCurrentUser, updateUser, testRoute };
