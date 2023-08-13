const productService = require('../services/productservice');

async function scrapeAndSaveProduct(req, res) {
  const { url } = req.body;
  const user = req.user;

  productService.saveProduct(
    user.userId,
    url,
    title,
    price,
    description,
    reviewsCount,
    ratings,
    mediaCount
  );

  res.status(201).send('Product details saved successfully');
}

module.exports = {
  scrapeAndSaveProduct,
};
