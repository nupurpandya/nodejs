const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllUsers= async(req,res) => {
  try{
    const users=await User.find();
    res.status(200).json(users)
  }catch (err) {
    res.status(400).json({ error: err.message });
  }
}