const mongoose = require('mongoose')

const vitalsSchema = moongoose.Schema({
    bloodPressure: {
        type: String,
        required:[true],

    },
    temperature: {
        type: Number,
        required: true,
        default: 'temperature',
    },
    pulse: {
        type: Number,
        required: true,
        default:0
    }
},
{
    timestamps:true
}
)

const vitals = mongoose.model('Patient vitals',vitalsSchema);
module.exports = vitals;