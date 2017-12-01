const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  partysize: { type: Number, required: true},
  checkinto: { type: String},
  versionKey: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;
