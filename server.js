const express = require('express');
const mongoose = require('mongoose');
//const patient = require('./models/patientModel');
const app = express();

app.use(express.json());

app.get('/patient', async(req, res) => {
    try {
        const viewPatients = await patient.find()
        res.status(200).json(viewPatients);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



app.post('/patient', async(req, res) => {
    try {
        const createdPatient = await patient.create(req.body)
        res.status(200).json(createdPatient);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//route to view details of a specific patient

app.get('/patient/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const patient = await patient.findById(id);
        res.status(200).json(patient);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/encounter', async(req, res) => {
    try {
        const createdEncounter = await encounter.create(req.body)
        res.status(200).json(createdEncounter);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
    
})

app.post('/vitals', async(req, res) => {
    try {
        const createdVitals = await vitals.create(req.body)
        res.status(200).json(createdVitals);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



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