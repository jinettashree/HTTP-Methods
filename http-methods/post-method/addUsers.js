const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Sakshi" },
  { id: 2, name: "Hari" }
];

app.post("/users", (req, res) => {

  const newUser = req.body;

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });

});

app.get("/users",(req,res)=>{
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});