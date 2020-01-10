const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    bloodgroup: String,
    urgency: String,
    noOfUnitsRequired: Number,
    country: String,
    state: String,
    city: String,
    hospital: String,
    yourRelationWithPatient: String,
    contact: Number,
    additionalInstructions: String,
    donated: Boolean,
    comments: Array,
    volunteer: Array
});

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;