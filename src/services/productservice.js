const Product = require('../models/product');

async function saveProduct(userId, url, title, price, description, reviewsCount, ratings, mediaCount) {
  const product = new Product({
    userId,
    url,
    title,
    price,
    description,
    reviewsCount,
    ratings,
    mediaCount,
  });

  await product.save();
}

module.exports = {
  saveProduct,
};
