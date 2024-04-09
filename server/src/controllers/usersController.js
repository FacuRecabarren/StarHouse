const { User } = require('../db');

const updateUserDB = async (id, userType) =>{

    let userToUpdate = await User.findOne({
        where: {
            id: id,
        },
    });

    return await userToUpdate.update({
        userType: userType
    });

}

const getAllUsers = async () =>{
    const usersDB = await User.findAll();
    const usersData = usersDB.map(user => ({
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        userType: user.userType
    }));

    return usersData;
}

const getUserByName = async (name) =>{
    const userDbFiltered = await User.findAll({
        where: {name: name}
    })

    return [...userDbFiltered]
}

const getUserById = async (id) =>{

    return await User.findByPk(id);
}

const deleteUserById = async (id) =>{

    const deleted = await User.destroy({
        where: { id: id }
    });

    return deleted;
}

module.exports = {
    getUserById,
    getAllUsers,
    getUserByName,
    updateUserDB,
    deleteUserById
}