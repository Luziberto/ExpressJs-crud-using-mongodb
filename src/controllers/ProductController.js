const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1} = req.query;
    const products = await Product.paginate({}, { page, limit: 3 });
    return res.json(products);
  },
  async store(req, res) {
    try {
      const product = await Product.create(req.body); 
      return res.json(product);
    } catch (error) {
        return res.status(500).json("Something Went Wrong");
    } 
  },
  async show(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      return res.json(product);
    } catch (error) {
        return res.status(500).json("Something Went Wrong");
    } 
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
      return res.json(product);
    } catch (error) {
        return res.status(500).json("Something Went Wrong");
    } 
  },

  async destroy(req, res) {
    try {
      await Product.findByIdAndRemove(req.params.id); 
      return res.send();
    } catch (error) {
        return res.status(500).json("Something Went Wrong");
    } 
  }
};