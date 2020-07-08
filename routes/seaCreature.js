const express = require("express");
const { allSea } = require("../controllers/seaCreature");

const router = express.Router();

// Get sea
router.get("/seacreature", allSea);

module.exports = router;
