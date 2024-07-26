const express = require(`express`); // for handling user request and sending responses
const app = express();
const bodyParser = require(`body-parser`); // middleware for handling objects

app.use(bodyParser.json()); // using the json function of the middleware to handle object data

app.use(bodyParser.urlencoded({ extended: false })); // to make sure we only work with arrays, object, and strings.
// Reject anything that is not properly formatted

const items = [
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

app.get(`/`, (req, res) => {
  res.send(items);
});

app.listen(3000, () => {
  console.log(`App connected successfully`);
});
