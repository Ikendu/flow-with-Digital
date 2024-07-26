const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(`/`, (req, res) => {
  res.send(`We are getting ready`);
});

app.listen(3000, () => console.log(`Connected at port 3000`));
