const expres = require('express');
const app = expres();
const port = process.env.PORT || 21100; 


const chefs = require('./Data/recipes.json');

app.get('/',(req,res)=>{
    res.send('Baratie Server is running')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
});

app.listen(port,() =>{
    console.log(`Baratie server is running : ${port}`)
});