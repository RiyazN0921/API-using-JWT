const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  url: String,
  title: String,
  price: String,
  description: String,
  reviewsCount: Number,
  ratings: Number,
  mediaCount: Number,
});

module.exports = mongoose.model('Product', productSchema);
