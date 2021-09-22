const jwt = require('jsonwebtoken');
const Admin = require('./models/admin.model');

module.exports.verify = async function (req, res, next) {
    //console.log(req.headers);
    try {
      const token = req.headers.authorization;
      console.log(token)
      if (!token) {
        return;
      } else {
        const verified = jwt.verify(token, "shhh");
        const admin = await Admin.findOne({_id: verified._id});
        console.log(admin.email);
        if (admin) {
          next();
        } else {
          console.log(false);
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };