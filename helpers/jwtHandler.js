const jwt = require("jsonwebtoken");

function generateJWT (payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
}
function verifyJWT (token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    generateJWT,
    verifyJWT
};