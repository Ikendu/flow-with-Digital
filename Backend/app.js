const express = require(`express`);
const app = express();

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
