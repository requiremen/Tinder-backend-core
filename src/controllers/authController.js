const authService = require("../services/authService");

const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await authService.signup(username, password);
        res.status(200).json({
            msg: "user created succefully",
            userid: newUser._id
        });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { token, username: user } = await authService.login(username, password);
        res.status(200).json({
            token,
            msg: "login successfull for user " + user
        });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

module.exports = { signup, login };
