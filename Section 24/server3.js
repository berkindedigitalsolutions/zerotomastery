const express = require('express');

const app = express();

//Body parser middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req,res,next) => {
    console.log('<h1>Helloooo</h1>')
    next()
})

// Get Request
app.get('/', (req,res) => {

    res.send("Getting root");
});
app.get('/profile', (req,res) => {

    res.send('Getting profile');
});

app.post('/profile', (req,res) => {
    console.log(req.body);

    res.send('Success');
});


app.listen(3000);
