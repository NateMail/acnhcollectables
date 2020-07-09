const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const fossilSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Fossil", fossilSchema);
