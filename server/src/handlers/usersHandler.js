const { getUserById, getAllUsers, getUserByName, updateUserDB, deleteUserById} = require("../controllers/usersController")

const getUsersHandler = async (req, res) =>{

    const { name } = req.query;

    try {
        if(name){
            const userByName = await getUserByName(name)
            res.status(200).json(userByName)
        }else{
            const allUsers = await getAllUsers();
            res.status(200).json(allUsers)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getDetailUsersHandler = async (req, res) =>{

    const { id } = req.params;

    try {
        const response = await getUserById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateUsersHandler = async (req, res) => {

    const { id, userType } = req.body;

    try {
        const response = await updateUserDB(id, userType);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUsersHandler = async (req, res) =>{
    const { id } = req.params;
    try {
        await deleteUserById(id)
        res.status(200).send("El producto se eliminó correctamente")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDetailUsersHandler,
    getUsersHandler,
    updateUsersHandler,
    deleteUsersHandler
}