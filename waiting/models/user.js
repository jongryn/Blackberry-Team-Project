const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phonenumber: { type: String, required: true},
  email: { type: String, required: true},
  time: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
