const { response, request } = require("express");

const validateJWT = (req, res, next) => {
  // x-auth-token headers
  const token = req.header("x-auth-token");
  console.log(token);

  next();
};

module.exports = {
  validateJWT,
};
