const users = require('../data/index')

const listUsers = (req, res) => {
    return res.json(users)
}

const showUser = (req, res) => {
    const user = users.find(v => parseInt(req.params.id) === v.id)
    if (user) {
        return res.json(user)
    } else {
        res.status(404).send('User not found')
    }
    return res.body(user)
}

const createUser = (req, res) => {
    req.body.id = users.length + 1
    users.push(req.body)
    res.status(201).send(req.body)
}

const updateUser = (req, res) => {
    const index = users.findIndex((user) => {
        return user.id  == req.params.id
    })

    
    if (index === -1) {
        return res.status(400).send("User not found")
    }
    users[index] = req.body


    return res.json(users)
}

const deleteUser = (req, res) => {
    const index = users.findIndex((user) => {
    return user.id == req.params.id
    })
    const deletedUser = users.splice(index, 1)

    if (index === -1) {
        return res.status(400).send("User not found")
    }

    return res.json ({
        message: "User Deleted",
        user: deletedUser
    })
};

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};