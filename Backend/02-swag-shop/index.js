const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);

const Product = require(`./models/product`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(`/`, (req, res) => {
  res.send(`We are getting ready`);
});

app.post(`/product`, (req, res) => {
  //   let product = new Product(req.body);          OR

  //   let { title, price } = req.body;
  //   let product = new Product({ title, price });  OR

  let product = new Product();
  product.title = req.body.title;
  product.price = req.body.price;

  product.save((err, savedItem) => {
    if (err) return res.status(500).json({ error: `Something went wrong` });
    else return res.status(200).json(savedItem);
  });
});

app.get(`/products`, async (req, res) => {
  //   let allProducts = await Product.find({});
  //   res.status(200).json(allProducts);
  //      OR

  Product.find({}, (err, allProducts) => {
    if (err) {
      return res
        .status(500)
        .json({ error: `We could not process your request` });
    } else {
      return res.json(allProducts);
    }
  });
});

app.listen(3000, () => console.log(`Connected at port 3000`));
