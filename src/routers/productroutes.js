const express = require('express');
const authenticateToken = require('../middleware/authentication');
const productController = require('../controllers/productcontroller');

const productrouter = express.Router();

productrouter.post('/scrape', authenticateToken, productController.scrapeAndSaveProduct);

module.exports = productrouter;
