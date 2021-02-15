const jwt = require("jsonwebtoken");

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    //console.log(payload);
    //console.log(process.env.SECRET_JWT_SEED);
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("The token can not be generated");
        }
        console.log(token);
        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};
