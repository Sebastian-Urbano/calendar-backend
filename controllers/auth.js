const { response } = require("express");
const { validationResult } = require("express-validator");

const newUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const renewToken = (req, res = response) => {
  console.log("se require el /");
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  newUser,
  loginUser,
  renewToken,
};