const User = require('../models/user.model')

async function getUsers(req, res) {

    try {
        const users = await User.find()

        res.send(users)

    } catch (error) {
        console.log(error)
    }

}
















function createUser(req, res) {
    res.send('POST nuevo usuario')
}



function deleteUser(req, res) {
    res.send('DELETE usuario')
}

function updateUser(req, res) {
    res.send('UPDATE usuario')
}


module.exports = {
    createUser,
    getUsers,
    deleteUser,
    updateUser
}