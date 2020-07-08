const express = require("express");
const {
  hemisphere,
  allBugsMonth,
  allFishMonth,
  display,
  allSeaMonth,
} = require("../controllers/month");

const router = express.Router();

router.get("/bug/:hem/:monthBug", allBugsMonth, display);
router.get("/fishs/:hem/:monthFish", allFishMonth, display);
router.get("/seas/:hem/:monthSea", allSeaMonth, display);

router.param("hem", hemisphere);
router.param("monthBug", allBugsMonth);
router.param("monthFish", allFishMonth);
router.param("monthSea", allSeaMonth);

module.exports = router;
