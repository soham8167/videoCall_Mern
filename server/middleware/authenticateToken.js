import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; 

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json('Access Denied');
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json('Invalid Token');
  }
};

export default authenticateToken;
