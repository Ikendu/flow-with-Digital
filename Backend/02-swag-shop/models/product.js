const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: Number,
  likes: Array,
});

module.exports = mongoose.model(`Product`, productSchema);
