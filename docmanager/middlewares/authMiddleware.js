const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
      console.log("Cookies in request:", req.cookies);
  const token = req.cookies.token;
  if (!token) return res.redirect("login");

  try {
    const decoded = jwt.verify(token, process.env.secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.redirect("login");
  }
}

module.exports = authMiddleware;
