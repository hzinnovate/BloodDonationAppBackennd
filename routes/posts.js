const express = require('express');
const router = express.Router();
const Posts = require('../model/Posts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/postRequest', (req, res) => {
    const post = req.body;

    const posts = new Posts({
        userId: post.uid,
        name: post.name,
        email: post.email,
        bloodgroup: post.bloodgroup,
        urgency: post.urgency,
        noOfUnitsRequired: post.noOfUnitsRequired,
        country: post.country,
        state: post.state,
        city: post.city,
        hospital: post.hospital,
        yourRelationWithPatient: post.yourRelationWithPatient,
        contact: post.contact,
        additionalInstructions: post.additionalInstructions,
        donated: post.donated,
        comments: post.comments,
        volunteer: post.volunteer
    });

    posts.save()
        .then(() => res.send({ message: "Post Added Success!" }))
        .catch(e => res.send(500, { message: e.message }));
})

module.exports = router;