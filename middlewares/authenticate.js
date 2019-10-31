const User = require("../models/user.js");
const jwt = require("../helpers/jwtHandler.js");

function authenticate (req, res, next) {
    try {
        const decoded = jwt.verifyJWT(req.headers.jwt_token);
        User.findOne({
            email: decoded.email
        })
        .then((user) => {
            if (user) {
                next();
            } else {
                next(err);
            }
        });
    }
    catch (err) {
        next(err);
    }
}

module.exports = authenticate;