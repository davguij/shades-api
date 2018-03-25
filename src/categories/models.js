const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: String,
  href: String,
});

const categorySchema = new mongoose.Schema({
  name: String,
});

module.exports = {
  Entry: mongoose.model('Entry', entrySchema),
  Category: mongoose.model('Category', categorySchema),
};
