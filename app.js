const express = require("express");
const path = require('path');

const port = 3000;
const app = express();


app.set("view engine", "hbs");
app.use('/assets', express.static(path.join(__dirname, "./assets")));t
app.get('/',  function(req, res) {
    res.render("index");
    })
    app.get('/about', function (req, res){
        res.send("strona o nas")
        })

    app.listen(port, (err)=>{
        if (err) {return console.log(err)}
        console.log ("działa na porcie", port)
    })