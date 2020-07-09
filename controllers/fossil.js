const Fossil = require("../models/fossil");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.createFossil = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, files) => {
    if (error) {
      return res.status(400).json({
        error: "Creature could not be created",
      });
    }
    let fossil = new Fossil(fields);
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    fossil.postedBy = req.profile;
    if (files.photo) {
      fossil.photo.data = fs.readFileSync(files.photo.path);
      fossil.photo.contentType = files.photo.type;
    }
    fossil.save((error, result) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      }
      res.json(result);
    });
  });
};

exports.allFossils = (req, res) => {
  const fossils = Fossil.find()
    .select("name price photo")
    .then((fossils) => {
      res.json(fossils);
    })
    .catch((err) => console.log(err));
};
