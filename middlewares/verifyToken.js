const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    console.log(token);
    if (token) {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      return next();
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(403).send("Cookies is expired or Forbidden");
  }
};

module.exports = { verifyToken };
