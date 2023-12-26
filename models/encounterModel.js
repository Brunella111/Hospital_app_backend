const mongoose = require('mongoose')

const encounterSchema = moongoose.Schema({
    patientId: {
        type: String,
        required:[true,"Please enter a patient ID"],

    },
    typeOfEncounter: {
        type: String,
        required: true,
        default: 'Emergency/OPD/Specialist Care',
    },
    encounterDate: {
        type: String,
        required: true,
        default: 'Current Date',
    },
    encounterTime: {
        type: String,
        required: true,
        default: '00:00',
}
},
{
    timestamps:true
}
)

const encounter = mongoose.model('Encounter',encounterSchema);
module.exports = encounter