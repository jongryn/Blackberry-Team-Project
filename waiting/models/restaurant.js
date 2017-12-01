const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  zip: { type: String, required: true },
  img: { type: String, required: true }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
