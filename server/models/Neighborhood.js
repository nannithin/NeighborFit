const mongoose = require("mongoose")

const neighborhoodSchema = new mongoose.Schema({
  name: String,
  crimeRate: Number,
  rentAverage: Number,
  walkScore: Number,
  schoolRating: Number,
  nightlife: Number,
  parks: Number,
  shopping: Number,
  restaurants: Number,
  publicTransit: Number
})

module.exports = mongoose.model("Neighborhood", neighborhoodSchema)
