const express = require("express");
const router = express.Router();
const Neighborhood = require("../models/Neighborhood");

function normalize(val, min, max) {
  return (val - min) / (max - min);
}

router.post("/", async (req, res) => {
  const prefs = req.body;
  const priorities = prefs.priorities;
  const all = await Neighborhood.find();

  const rentMin = 10000;
  const rentMax = 40000;

  const results = all.map(n => {
    const crimeScore = 1 - n.crimeRate;
    const rentScore = 1 - normalize(n.rentAverage, rentMin, rentMax); 

    const score =
      crimeScore * priorities.safety[0] +
      normalize(n.schoolRating, 0, 10) * priorities.schools[0] +
      normalize(n.nightlife, 0, 10) * priorities.nightlife[0] +
      normalize(n.parks, 0, 10) * priorities.parks[0] +
      normalize(n.shopping, 0, 10) * priorities.shopping[0] +
      normalize(n.restaurants, 0, 10) * priorities.restaurants[0] +
      normalize(n.publicTransit, 0, 10) * priorities.publicTransit[0] +
      normalize(n.walkScore, 0, 100) * priorities.walkability[0] +
      rentScore * 10;

    return { ...n._doc, matchScore: score };
  });

  const sorted = results.sort((a, b) => b.matchScore - a.matchScore);
  res.json(sorted.slice(0, 5)); 
});

module.exports = router;
