const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    console.log(req.cookies.access_token);
    const token = req.cookies.access_token;
    // console.log(token);
    if (token) {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      return next();
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(403).send(" Forbidden");
  }
};

module.exports = { verifyToken };
