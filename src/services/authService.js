const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (username, password) => {
    const alreadyExist = await User.findOne({ username });
    if (alreadyExist) {
        throw new Error("user already exsits");
    }
    const hashedpssword = await bcrypt.hash(password, 10);
    const newuser = await User.create({
        username,
        password: hashedpssword
    });
    return newuser;
};

const login = async (username, password) => {
    const findeuser = await User.findOne({ username });
    if (findeuser && await bcrypt.compare(password, findeuser.password)) {
        const token = jwt.sign({
            userid: findeuser._id,
            username: findeuser.username
        }, process.env.JWT_SECRET);
        return { token, username: findeuser.username };
    } else {
        throw new Error("invalid credentials either username or password is incorrect");
    }
};

module.exports = { signup, login };
