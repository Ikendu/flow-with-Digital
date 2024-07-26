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
app.post(`/post`, (req, res) => {
  let postItem = req.body;
  //   error handling
  if (!postItem || !postItem.name)
    return res.status(500).json({ error: `Send a complete object` });
  // adding the food item into the foodItems array
  foodItems.push(req.body);
  return res.status(200).json(foodItems);
});

// for updating the food items using the id from the body. Id can also be gotten from params using /update/:id and req.params.id
app.put(`/update`, (req, res) => {
  let updateData = req.body.name; //get the item to update
  let itemId = req.body.id; //get the id of the item from the body

  if (!updateData || updateData == ``) {
    return res
      .status(500)
      .json({ error: `Please specify what you want to update` });
  }
  // using loop to get the item from static array. Normally we use .find or .findById to get item id from the database
  for (let i = 0; i < foodItems.length; i++) {
    let checkItem = foodItems[i];
    if (checkItem.id === itemId) {
      checkItem.name = updateData;
      return res.status(200).json(foodItems);
    }
  }
  return res.status(500).json({ error: `Item not found` });
});

app.listen(3000, () => {
  console.log(`App connected successfully`);
});
