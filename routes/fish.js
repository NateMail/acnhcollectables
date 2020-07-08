const express = require("express");
const { fishById, allFish } = require("../controllers/fish");

const router = express.Router();

// Get fish
router.get("/fishs", allFish);

router.param("fishId", fishById);

module.exports = router;
