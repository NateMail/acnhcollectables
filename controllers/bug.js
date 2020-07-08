const Bug = require("../models/bug");

exports.bugById = (req, res, next, id) => {
  Bug.findById(id).exec((error, bug) => {
    if (error || !bug) {
      return res.status(400).json({
        error: error,
      });
    }
    req.bug = bug;
    next();
  });
};

exports.allBugs = (req, res) => {
  const bugs = Bug.find()
    .select(" name price photo north south  timeOfDay spawnArea description")
    .then((bugs) => {
      res.json(bugs);
    })
    .catch((err) => console.log(err));
};
