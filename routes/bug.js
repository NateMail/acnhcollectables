const express = require("express");
const { bugById, allBugs } = require("../controllers/bug");

const router = express.Router();

// Get bugs
router.get("/bug", allBugs);

router.param("bugId", bugById);

module.exports = router;
