const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const urlRouter = require('./routers/urlRouter.js');
const app = express();

dotenv.config({path:'./config.env'});

app.use(express.json());
// app.use(express.urlencoded({extended: false}));

mongoose.connect(process.env.DB_connection).then(()=>{
    console.log('DB connected successfuly');
}).catch(err => {
    console.log(err);
});

app.use('/' , urlRouter);

const Port = 3000;

app.listen(Port , () => {
    console.log(`app running on port ${Port}`);
})