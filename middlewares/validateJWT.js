const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  // x-auth-token headers
  const token = req.header("x-auth-token");
  //console.log(token);
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "There is no token",
    });
  }

  try {
    //payload
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;

    //console.log(payload);
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "No valid token",
    });
  }

  next();
};

module.exports = {
  validateJWT,
};
