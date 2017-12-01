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
    name: "Noodology",
    zip: "92618",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Id_bwTiWd60ztz3QDmT9pw/ls.jpg"
  },
  {
    name: "Habana",
    zip: "92618",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Id_bwTiWd60ztz3QDmT9pw/ls.jpg"
  },
  {
    name: "Urban Seoul",
    zip: "92612",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Id_bwTiWd60ztz3QDmT9pw/ls.jpg"
  },
  {
    name: "The Dead Zone",
    zip: "92612",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Id_bwTiWd60ztz3QDmT9pw/ls.jpg"
  },
  {
    name: "Fukada",
    zip: "92604",
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Id_bwTiWd60ztz3QDmT9pw/ls.jpg"
  }
];



const userSeed = [
    {
      name: "Jose Morales",
      phone: "123-123-1234",
      guest: 4
    },
    {
      name: "Charles Hu",
      phone: "123-123-1234",
      guest: 8
    },
    {
      name: "Alex",
      phone: "123-123-1234",
      guest: 5
    },
    {
      name: "Micheal",
      phone: "123-123-1234",
      guest: 2
    },
    {
      name: "Jon Grin",
      phone: "123-123-1234",
      guest: 2
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
