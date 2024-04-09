const {Router} = require('express');
const productsRouter = require('./productRouter')
const usersRouter = require('./usersRouter')
const cloudinaryRouter = require('./cloudinaryRouter');
const authRouter = require('./authRouter');
const adminRouter = require('./adminRouter');
const { authenticateUser, authenticateAdmin } = require('../middleware/authMiddleware');

const mainRouter = Router();

mainRouter.use('/products', productsRouter)
mainRouter.use('/users', usersRouter)
mainRouter.use('/cloudinary', cloudinaryRouter)
mainRouter.use('/auth', authRouter);
mainRouter.use('/admin', authenticateAdmin, adminRouter);
mainRouter.use(authenticateUser);

module.exports = mainRouter;