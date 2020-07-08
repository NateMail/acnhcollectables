const Sea = require("../models/seaCreature");

exports.seaById = (req, res, next, id) => {
  Sea.findById(id).exec((error, sea) => {
    if (error || !bug) {
      return res.status(400).json({
        error: error,
      });
    }
    req.sea = sea;
    next();
  });
};

exports.allSea = (req, res) => {
  const sea = Sea.find()
    .select("name price photo north south timeOfDay description shadow swim")
    .then((sea) => {
      res.json(sea);
    })
    .catch((err) => console.log(err));
};
