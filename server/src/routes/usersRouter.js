const {Router} = require('express');
const { getUsersHandler, getDetailUsersHandler, updateUsersHandler, deleteUsersHandler } = require('../handlers/usersHandler');


const usersRouter = Router();

usersRouter.get('/', getUsersHandler) 

usersRouter.get('/:id', getDetailUsersHandler)

usersRouter.put('/', updateUsersHandler)

usersRouter.delete('/:id', deleteUsersHandler)

module.exports = usersRouter;