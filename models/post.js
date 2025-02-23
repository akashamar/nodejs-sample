const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    dafault: Date.now,
  },
});

module.exports = mongoose.model("posts", PostSchema);
