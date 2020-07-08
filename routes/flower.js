const express = require("express");
const { allFlowers, allFlowersByGenus } = require("../controllers/flower");

const router = express.Router();

// Get flower
router.get("/flowers", allFlowers);

// Get flowers by genus
router.get("/flowers/:genus", allFlowersByGenus);

router.param("genus", allFlowersByGenus);

module.exports = router;
