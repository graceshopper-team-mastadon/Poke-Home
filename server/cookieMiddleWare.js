const jwt = require('jsonwebtoken');

exports.cookieMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    try {
       const user =  jwt.verify(token, test)
        req.user = user
        next()
    } catch (err) {
        res.clearCookie('token');
    }
};