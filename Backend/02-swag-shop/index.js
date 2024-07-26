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
});

app.listen(3000, () => console.log(`Connected at port 3000`));
