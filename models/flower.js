const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const flowerSchema = new mongoose.Schema({
  photo: {
    data: Buffer,
    contentType: String,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  addedBy: {
    type: ObjectId,
    ref: "User",
  },
  genus: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Flower", flowerSchema);
