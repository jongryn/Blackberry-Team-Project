const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Restaurants collection and inserts the restaurants below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const restaurantSeed = [
  {
    name: "The Dead Zone",
    address: "123 ABC Street",
    waittime: 20
  },
  {
    name: "The Dead Zone",
    address: "123 ABC Street",
    waittime: 20
  },
  {
    name: "The Dead Zone",
    address: "123 ABC Street",
    waittime: 20
  },
  {
    name: "The Dead Zone",
    address: "123 ABC Street",
    waittime: 20
  },
  {
    name: "The Dead Zone",
    address: "123 ABC Street",
    waittime: 20
  }
];



const userSeed = [
    {
      name: "Jose Morales",
      phone: "123-123-1234",
      guest: 4,
      selectedres: "Jose's"
    },
    {
      name: "Charles Hu",
      phone: "123-123-1234",
      guest: 8,
      selectedres: "Jose's"
    },
    {
      name: "Alex",
      phone: "123-123-1234",
      guest: 5,
      selectedres: "Jose's"
    },
    {
      name: "Micheal",
      phone: "123-123-1234",
      guest: 2,
      selectedres: "Jose's"
    },
    {
      name: "Jon Grin",
      phone: "123-123-1234",
      guest: 2,
      selectedres: "Jose's"
    }
  ];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });


db.Restaurant
    .remove({})
    .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
