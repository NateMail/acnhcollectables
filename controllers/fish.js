const Fish = require("../models/fish");

exports.fishById = (req, res, next, id) => {
  fish.findById(id).exec((error, fish) => {
    if (error || !fish) {
      return res.status(400).json({
        error: error,
      });
    }
    req.fish = fish;
    next();
  });
};

exports.allFish = (req, res) => {
  const fish = Fish.find()
    .select(
      "name price photo shadow north south timeOfDay spawnArea description"
    )
    .then((fish) => {
      res.json(fish);
    })
    .catch((err) => console.log(err));
};
