const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Dona" },
  { id: 2, name: "John" },
  { id: 3, name: "Maria" },
  { id: 4, name: "Jeffry" },
  { id: 5, name: "Jinetta" },
];

app.get("/users", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ message: "Name query parameter required" });
  }

  const filteredUsers = users.find(
    (u) => u.name.toLowerCase() === name.toLowerCase(),
  );

  if (!filteredUsers) {
    res.status(404).json({ message: "Users not found" });
  }
  res.status(200).json(filteredUsers);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});