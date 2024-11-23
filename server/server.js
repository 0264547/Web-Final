const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send("Server is up");
});

app.listen(3000, ()=>{
    console.log("Application Listening on Port 3000");
});