const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { userId: ... }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

function authorisedUser(req, res, next) {
  const allowedRoles=['Admin','Board User','IT'];
  if(!allowedRoles.includes(req.user.role)){
    res.status(403).json({msg:'You are unauthorised'})
  }
  next();
}

module.exports = { authMiddleware, authorisedUser };
