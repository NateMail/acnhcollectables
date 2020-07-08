const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const fishSchema = new mongoose.Schema({
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
  north: {
    type: String,
    required: true,
  },
  south: {
    type: String,
    required: true,
  },
  timeOfDay: {
    type: String,
    required: true,
  },
  spawnArea: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shadow: {
    type: String,
    required: true,
  },
  addedBy: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Fish", fishSchema);
