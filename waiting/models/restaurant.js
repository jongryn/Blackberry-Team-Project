const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  img: { type: String, required: true},
  phone: { type: String, required: true},
  url: { type: String, required: true},
  waittime: { type: String, required: true}
});

const User = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
