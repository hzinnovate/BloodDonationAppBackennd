const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    bloodgroup: String,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;