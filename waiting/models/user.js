const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  guest: { type: Number, required: true},
  selectedres: { type: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
