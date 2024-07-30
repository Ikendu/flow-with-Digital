const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, default: `item` },
  price: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model(`Product`, productSchema);
