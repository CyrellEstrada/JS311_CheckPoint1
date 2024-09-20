const express = require('express')
const router = express.Router();
const users = require("../data/index")
const sampleUser = require("../data/sampleUser")


router.get('/users', ((req, res) => {
    return res.json(users)
}))

router.get('/users/:id', ((req, res) => {
    return res.json(users.find((user) => parseInt(req.params.id) === user.id))
}))

router.post('/users', ((req, res) => {
    id = users.length + 1;
    users.push(req.body);
    // res.status(201).send(req.body);
    return res.json(users)
}));

router.put('/users/:id', (req, res) => {

})

module.exports = router