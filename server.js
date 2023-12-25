const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.get('/', (req, res) => {
    res.send("backend testing")});



mongoose.set("strictQuery",false);
mongoose.
connect("mongodb+srv://newadmin:newadmin@nellaapi.rd8z423.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log('connected to Mongodb')
    app.listen(3000,(port) => {
        console.log("App is running on port 3000")
    });
}).catch (() => {
    console.log('error')
});