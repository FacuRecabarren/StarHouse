const { Router } = require('express');
const adminController = require('../controllers/adminController');
const { authenticateAdmin } = require('../middleware/authMiddleware');

const adminRouter = Router();

// Rutas protegidas para administradores
adminRouter.get('/dashboard', authenticateAdmin, adminController.dashboard);
adminRouter.post('/addProduct', authenticateAdmin, adminController.addProduct);

module.exports = adminRouter;