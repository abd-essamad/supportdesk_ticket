const mongoose = require('mongoose')

const useSchema = mongoose.Schema({
    name: {
        type: String,
        required: ['Please add a name']

    },
    email: {
        type: String,
        required: ['Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: ['Please add a password'],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
timestamps: true
}

)

module.exports = mongoose.model('User',useSchema)