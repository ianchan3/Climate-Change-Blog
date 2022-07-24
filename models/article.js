const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  releaseDate: {
    type: Number,
    defualt: function() {
      return new Date().getFullYear();
    },
    min: 2000
  }
});

module.exports = mongoose.model("Article", articleSchema);