const express = require("express");
const app = express();

const users = [
    { id: 1, name: "Dona"},
    { id: 2, name: "John"},
    { id: 3, name: "Maria"},
    { id: 4, name: "Jeffry"},
    { id: 5, name: "Jinetta"}
];

app.get("/users", (req, res) => {
    res.status(200).json(users)
});

app.listen(5000, () =>{
console.log("Server is running on port 5000")
});