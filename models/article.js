const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  publishedDate: {
    type: Number,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5, 
    default: 5
  },
});

const articleSchema = new Schema({
  title: String,
  publishedDate: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 2000
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model("Article", articleSchema);