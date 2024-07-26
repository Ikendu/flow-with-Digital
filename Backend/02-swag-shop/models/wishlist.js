const { Schema, model } = require(`mongoose`);

const ObjectId = Schema.Types.ObjectId;

let wishListSchema = new Schema({
  title: { type: String, default: `my wish list` },
  products: [{ type: ObjectId, ref: `Product` }],
});

module.exports = model(`WishList`, wishListSchema);
