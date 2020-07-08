const Bug = require("../models/bug");
const Fish = require("../models/fish");
const Sea = require("../models/seaCreature");

exports.hemisphere = (req, res, next, hem) => {
  if (hem === "north" || hem === "south") {
    req.hem = hem;
    next();
  } else {
    res.send("Error wrong hemisphere entered");
  }
};

exports.allBugsMonth = (req, res, next, monthBug) => {
  if (req.hem === "north") {
    const bugs = Bug.find({ north: { $regex: `${monthBug}`, $options: "i" } })
      .select(" name price photo north south  timeOfDay spawnArea description")
      .then((bugs) => {
        req.bugs = bugs;
        next();
      })
      .catch((err) => console.log(err));
  }
  if (req.hem === "south") {
    const bugs = Bug.find({ south: { $regex: `${monthBug}`, $options: "i" } })
      .select(" name price photo north south  timeOfDay spawnArea description")
      .then((bugs) => {
        req.bugs = bugs;
        next();
      })
      .catch((err) => console.log(err));
  }
};

exports.allFishMonth = (req, res, next, monthFish) => {
  if (req.hem === "north") {
    const fish = Fish.find({ north: { $regex: `${monthFish}`, $options: "i" } })
      .select(
        " name price photo north south  timeOfDay spawnArea description shadow"
      )
      .then((fish) => {
        req.fish = fish;
        next();
      })
      .catch((err) => console.log(err));
  }
  if (req.hem === "south") {
    const fish = Fish.find({ south: { $regex: `${monthFish}`, $options: "i" } })
      .select(
        " name price photo north south  timeOfDay spawnArea description shadow"
      )
      .then((fish) => {
        req.fish = fish;
        next();
      })
      .catch((err) => console.log(err));
  }
};

exports.allSeaMonth = (req, res, next, monthSea) => {
  if (req.hem === "north") {
    const sea = Sea.find({ north: { $regex: `${monthSea}`, $options: "i" } })
      .select(
        "name price photo north south timeOfDay spawnArea description shadow swim"
      )
      .then((sea) => {
        req.sea = sea;
        next();
      })
      .catch((err) => console.log(err));
  }
  if (req.hem === "south") {
    const sea = Sea.find({ south: { $regex: `${monthSea}`, $options: "i" } })
      .select(
        " name price photo north south timeOfDay spawnArea description shadow swim"
      )
      .then((sea) => {
        req.sea = sea;
        next();
      })
      .catch((err) => console.log(err));
  }
};

// To send the json to be displayed
exports.display = (req, res, next) => {
  if (req.bugs !== undefined) {
    return res.json(req.bugs);
  }

  if (req.fish !== undefined) {
    return res.json(req.fish);
  }

  if (req.sea !== undefined) {
    return res.json(req.sea);
  }
};
