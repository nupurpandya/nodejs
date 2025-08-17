const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // restricts values
    default: "user",
  },
   profilePicture: {
    type: String,
    default: "/images/userdefaultavatar.png",  // 👈 default profile image
  },
  password: {
    type: String,
    required: true,
  },
});

// hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
