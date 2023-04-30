import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const authConfig = { secret: process.env.FINANCE_JWT_SECRET };

const authConfigs = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "Uninformed Token" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).json({ error: "Invalid Token" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: "Invalid Token" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid Token" });
    req.userID = decoded.id;
    return next();
  });
};

export default authConfigs;
