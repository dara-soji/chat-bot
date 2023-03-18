const express = require('express');
// const { model } = require('mongoose');
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        data: {
            message: "Welcome to my blog"
        }
    });
});

app.use("*", (req, res)=>{
    res.status(404).json({message: "route not found"})
  })

module.exports = app