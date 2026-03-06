const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Mary", age: 30 }
];

app.put("/users/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: id,
    name: req.body.name,
    age: req.body.age
  };

  res.json({
    message: "User replaced successfully",
    user: users[index]
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});