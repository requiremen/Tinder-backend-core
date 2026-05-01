const User = require("../models/userModel");

const getCurrentUser = async (userid) => {
    const user = await User.findById(userid).select("-password");
    if (!user) throw new Error("User not found");
    return user;
};

const updateUser = async (userid, bio, age) => {
    const updatedUser = await User.findByIdAndUpdate(
        userid,
        { bio, age },
        { new: true }
    ).select("-password");
    if (!updatedUser) throw new Error("User not found");
    return updatedUser;
};

module.exports = { getCurrentUser, updateUser };
