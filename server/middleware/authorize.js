require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_TOKEN = process.env.JWT_TOKEN;

const authorize = async (req, res, next) => {
    try {
        const token = await req.cookies.jwt_token;

        const verify = jwt.verify(token, JWT_TOKEN);

        const rootUser = await User.findOne({ _id: verify._id, "tokens.token": token });
        if (!rootUser) { throw new Error("User not found") }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (err) {
        console.log(err);
        res.status(401).send('Unauthorized: No token provided');

    }
}

module.exports = authorize;