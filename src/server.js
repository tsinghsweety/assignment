const express = require('express');
const cors = require("cors");

const app = express();


const fs = require('fs');
const port = 3001;
const dataPath = './movies.json';
// const routes = require('./routes.js')(app,fs);

app.use(cors());
app.get("/getmovies", function(req, res){
    res.send("Hello");
});
app.get('/movies',(req,res)=>{
    fs.readFile(dataPath,'utf8',(err,data)=>{
        console.log("err:",err);
        console.log("data:",data);
        if(err){
            throw err;
        }
        res.send(JSON.parse(data));
    });
});


const server = app.listen(port, () =>{
    console.log(`this app is listening at http://localhost:${port}`);
});