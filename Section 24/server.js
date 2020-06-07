const express = require('express');

const app=express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'))
/*
app.get('/:id', (req,res) => {
    // req.query
    console.log('Query',req.query);
    // req.body
    // req.header
    console.log('Headers',req.headers)
    // req.params
    console.log(req.params)
    //res.send('Getting root');
    res.status(404).send("not found");
}) */



app.listen(3001);