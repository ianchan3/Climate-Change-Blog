const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    match: /.{10,}/
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
  }, {
  timestamps: true
});

const blogSchema = new Schema({
  title: String,
  publishedDate: {
    },
  reviews: [reviewSchema]
    }, {
});

module.exports = mongoose.model("Blog", blogSchema);