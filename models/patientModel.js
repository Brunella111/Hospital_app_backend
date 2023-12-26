const mongoose = require('mongoose')

const patientSchema = moongoose.Schema({
    patientId: {
        type: String,
        required:[true,"Please enter a patient ID"],

    },
    surname: {
        type: String,
        required: true,
        default: 0,
}
,
    otherNames: {
        type: String,
        required: true,
        default: 0,
}
,
    gender: {
        type: Sting,
        required: true,
        default: 0,
}
,
    phoneNumber: {
        type: Number,
        required: true,
        default: 0,
}
,
    address: {
        type: String,
        required: true,
        default: 0,
}
,
    emergencyName: {
        type: String,
        required: true,
        default: 0,
}
,
    emergencyContact: {
        type: Number,
        required: true,
        default: 0,
}
,
    emergencyRelationship: {
        type: String,
        required: true,
        default: 0,
}
},
{
    timestamps:true
}
)

const patient = mongoose.model('Patient',patientSchema);
module.exports = patient