const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; //process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); // Delete all intial data in database
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66ee611395261498c63d27e8",
  }));
  await Listing.insertMany(initData.data); //Insert data from data.js file i.e database
  console.log("data was initialized");
};

initDB();
