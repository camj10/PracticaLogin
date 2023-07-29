const jwt = require("jsonwebtoken");
const secret = 'keepThisSecret'
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
  console.log(req.cookies)
  jwt.verify(req.cookies.sesion_token, secret, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
        req.usuario = payload;
        next();
    }
  });
}