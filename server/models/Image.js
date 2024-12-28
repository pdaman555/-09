// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String, 
  imageData: Buffer,
  createdAt: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
