const expres = require('express')


const app = expres();

app.get("/",(req,res)=>{
    res.json({message:"Hello server running"})
})

app.get("/allData",(req,res)=>{
    res.send({result:"okkk"})
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})