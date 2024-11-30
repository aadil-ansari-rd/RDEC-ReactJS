const User = require("../models/User");
const cloudinary = require("cloudinary");

async function addUser(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send({ success: false, message: "User already exist" });
    } else {
      user = new User(req.body);
      await user.save();
      res.status(200).send({ success: true });
    }
  } catch (err) {
    res.status(400).send({ success: false });
    console.log(err.message);
  }
}
async function getUsers(req, res) {
  try {
    let pageNo = parseInt(req.query.pageNo);
    let limit = parseInt(req.query.limit);
    let sk = (pageNo - 1) * limit;
    let totalCounts = await User.countDocuments({});
    let users = await User.find({
      firstName: new RegExp(req.query.search, "i"),
    })
      .skip(sk)
      .limit(limit);
    res
      .status(200)
      .send({ success: true, data: users, totalCounts: totalCounts });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false });
  }
}
async function getUser(req, res) {
  try {
    let id = req.params.id;
    let user = await User.findOne({ _id: id });
    res.status(200).send({ success: true, data: user });
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ success: false });
  }
}
async function editUser(req, res) {
  try {
    let id = req.params.id;
    console.log(req.body)

    let user = await User.findOne({ _id: id });
    user.status = req.body.status;
    user.save();
    res.status(200).send({ sucess: true });
  } catch (err) {
    console.log(err.message);
    res.status(400).send({sucess: false})

  }
}
module.exports = {
  addUser,
  getUsers,
  getUser,
  editUser,
};
