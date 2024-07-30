// Not yet fully tested

const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`).config();

const Product = require(`./models/product`);
const WishList = require(`./models/wishlist`);

const dbConnect = mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log(`Database connected to MongoDB `));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(`/`, (req, res) => {
  res.send(`We are getting ready`);
});

app.post(`/product`, async (req, res) => {
  try {
    const savedItems = await Product.create({ ...req.body });
    res.status(200).json(savedItems);
  } catch (e) {
    console.log(`Product not created`, e);
    res.json(`Try again letter`, e);
  }
});

app.get(`/products`, async (req, res) => {
  try {
    let allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post(`/wishlist`, async (req, res) => {
  const { title } = req.body;
  try {
    let myList = await WishList.create({ title });
    console.log(myList);
    res.json(myList);
  } catch (e) {
    res.json(e);
  }
});

// list all the wishlist with all the data associated with the products id
app.get(`/wishlist`, async (req, res) => {
  const allList = await WishList.find({}) // find the wishlists id
    .populate({ path: `products`, model: `Product` }) // add all other data that belong to the id
    .exec();
  if (allList) res.send(allList);
  else res.status(500).send({ error: `No list found` });
});

// update the id in the wishList products
app.put(`/wishlist/add`, async (req, res) => {
  const { wishlistId, productId } = req.body;
  const product = await Product.findOne({ _id: productId });
  const updatedList = await WishList.updateOne(
    { _id: wishlistId },
    { $addToSet: { products: product._id } }
  );
  res.send(updatedList);
});

app.listen(3000, () => console.log(`Connected at port 3000`));
