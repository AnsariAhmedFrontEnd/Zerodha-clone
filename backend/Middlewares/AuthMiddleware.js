require("dotenv").config();
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/UsersModel");

const userVerication = (req, res) => {
  const token = req.cookies.token;
  console.log(token)

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UserModel.findById(data._id);
      if (user) {
        return res.json({ status: true, user });
      } else {
        return res.json({ status: false });
      }
    }
  });
};

module.exports = { userVerication };
