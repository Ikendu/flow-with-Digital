const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Welcome on board`);
});

app.listen(3000, () => {
  console.log(`App connected successfully`);
});
