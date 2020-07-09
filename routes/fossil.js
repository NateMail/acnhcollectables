const express = require("express");
const { allFossils } = require("../controllers/fossil");

const router = express.Router();

// Get Fossils
router.get("/fossil", allFossils);

module.exports = router;
