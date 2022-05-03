const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    phone:{
        type: 'number',
        required: true,
    },
    gender:{
        type: 'string',
        required: true,
    },
    city: {
        type: 'string',
        required: true,
    },
    dob:{
        type: 'date',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    }
}, {
    timestamps: true
});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;