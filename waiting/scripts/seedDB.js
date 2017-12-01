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
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/zb5eJtfx_umBpnlFwRJW5Q/ls.jpg"
  },
  {
    name: "Habana",
    zip: "92618",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/Id_bwTiWd60ztz3QDmT9pw/ls.jpg"
  },
  {
    name: "Urban Seoul",
    zip: "92612",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/5Qodjcqp5L5kFvbuT7p7yA/ls.jpg"
  },
  {
    name: "EMC Seafood & Raw Bar",
    zip: "92604",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/SKB_zCrN-nVUS2zOJQkUaA/ls.jpg"
  },
  {
    name: "The Stand",
    zip: "92618",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/-xGJAZ89RZYyVtj8geGKjQ/ls.jpg"
  },
  {
    name: "The Cut",
    zip: "92606",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/PpNmkfxFVg54ggO6Bzbg-w/ls.jpg"
  },
  {
    name: "CAVA",
    zip: "92606",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/V4ANxxCFV94x0Jyx8H-2eg/ls.jpg"
  },
  {
    name: "Puesto - Irvine",
    zip: "92618",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/g4mCpDIapGILwIQal7F3Ag/ls.jpg"
  },
  {
    name: "Meizhou Dongpo",
    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/4mqls8Yp_V_CXOrwA0bV7Q/ls.jpg"
  }
];



const userSeed = [
    {
      name: "Jose Morales",
      phone: "123-123-1234",
      partysize: 4,
      checkinto: "Urban Seoul"
    },
    {
      name: "Charles Hu",
      phone: "123-123-1234",
      partysize: 8,
      checkinto: "Urban Seoul"
    },
    {
      name: "Alex",
      phone: "123-123-1234",
      partysize: 5,
      checkinto: "Urban Seoul"
    },
    {
      name: "Micheal",
      phone: "123-123-1234",
      partysize: 2,
      checkinto: "Habana"
    },
    {
      name: "Jon Grin",
      phone: "123-123-1234",
      partysize: 2,
      checkinto: "Habana"
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
