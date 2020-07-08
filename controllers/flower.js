const Flower = require("../models/flower");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.allFlowers = (req, res) => {
  const flowers = Flower.find()
    .select(" name price photo genus desc")
    .then((flowers) => {
      res.json(flowers);
    })
    .catch((err) => console.log(err));
};

exports.allFlowersByGenus = (req, res, next, gen) => {
  const flowers = Flower.find({ genus: gen })
    .select("_id name price photo genus desc")
    .then((flowers) => {
      res.json(flowers);
    })
    .catch((err) => console.log(err));
};
