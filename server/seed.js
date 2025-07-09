const data = require("./data/sampleNeighborhoods.json");
const Neighborhood = require("./models/Neighborhood");

const mongoose = require("mongoose");
require("dotenv").config(); 

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Neighborhood.deleteMany({});
  await Neighborhood.insertMany(data);
  console.log("Database seeded!");
  process.exit();
});
