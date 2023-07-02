const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const chef = require("./Data/recipes.json");


app.get('/',(req,res) => {
    res.json({message: "hello the server is running "})
})

app.get("/chef",(req,res) => {
    res.send(chef);
});

app.get("/chef/:id",(req,res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id === id)
    res.send(selectedChef);

    console.log(id);
})

app.listen(600,() => {
    console.log("server is running on port 600")
});