const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Mary", age: 30 }
];

app.patch("/users/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  Object.assign(user, req.body);

  res.json({
    message: "User updated successfully",
    user: user
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});