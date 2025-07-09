const express = require("express")
const router = express.Router()
const Neighborhood = require("../models/Neighborhood")

router.post("/", async (req, res) => {
  const prefs = req.body

  const maxRent = 40000 
  const all = await Neighborhood.find()

  const results = all.map(n => {
    const priorities = prefs.priorities
    const score =
      priorities.safety[0] * (1 - n.crimeRate) +
      priorities.schools[0] * n.schoolRating +
      priorities.nightlife[0] * n.nightlife +
      priorities.parks[0] * n.parks +
      priorities.shopping[0] * n.shopping +
      priorities.restaurants[0] * n.restaurants +
      priorities.publicTransit[0] * n.publicTransit +
      priorities.walkability[0] * n.walkScore +
      (10 - (n.rentAverage / maxRent) * 10) * 1  

    return { ...n._doc, matchScore: score }
  })

  res.json(results.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5)) 
})

module.exports = router
