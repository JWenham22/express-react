const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Users = mongoose.model('users', usersSchema)

module.exports = Users;