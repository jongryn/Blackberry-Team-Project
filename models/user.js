const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  partysize: { type: Number, required: true},
  userrequest: { type: String},
  checkinto: { type: String},
  userwait: { type: Number},
  id: { type: String},
  versionKey: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;
