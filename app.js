const { application } = require('express');
const express = require('express');
const bodyParser= require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());


// to handle CORS Error cross origin resource sharing server and client running on diifernt servers 
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Contol-Allow-Methods','GET, POST, PUT, PATCH, DELETE ');
    res.setHeader('Acees-Contol-Allow-Header','Content-Type','Authorization');
    next();
})

app.use('/feed',feedRoutes);

app.listen(8080);