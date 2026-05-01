const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            req.userid = decoded.userid;
            req.username = decoded.username;
            next();
        } else {
            return res.status(401).json({ msg: "unauthorized access" });
        }
    } catch (err) {
        return res.status(401).json({ msg: "invalid token" });
    }
}

module.exports = authMiddleware;
