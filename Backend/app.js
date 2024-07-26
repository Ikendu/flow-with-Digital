const express = require(`express`); // for handling user request and sending responses
const app = express();
const bodyParser = require(`body-parser`); // middleware for handling objects

app.use(bodyParser.json()); // using the json function of the middleware to handle object data

app.use(bodyParser.urlencoded({ extended: false })); // to make sure we only work with arrays, object, and strings.
// Reject anything that is not properly formatted

const foodItems = [
  {
    id: "asd123",
    name: "tea",
  },
  {
    id: "qwe234",
    name: "milk",
  },
  {
    id: "sdf345",
    name: "garri",
  },
  {
    id: "dfg456",
    name: "okpa",
  },
  {
    id: "dss432",
    name: "gala",
  },
];

// for getting items from the server
app.get(`/`, (req, res) => {
  res.json(foodItems);
});

// for posting items to the server
app.post(`/`, (req, res) => {
  let postItem = req.body;
  if (!postItem || !postItem.name)
    return res.status(500).json({ error: `Send a complete object` });
  foodItems.push(req.body);
  return res.status(200).json(foodItems);
});

app.listen(3000, () => {
  console.log(`App connected successfully`);
});
