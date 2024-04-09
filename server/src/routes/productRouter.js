const {Router} = require('express');
const { getProductsHandler, getDetailProductsHandler, createProductsHandler, updateProductsHandler, deleteProductsHandler } = require('../handlers/productsHandler');

const ProductsRouter = Router();

ProductsRouter.get('/', getProductsHandler) 

ProductsRouter.get('/:id', getDetailProductsHandler)

ProductsRouter.post('/', createProductsHandler)

ProductsRouter.put('/', updateProductsHandler)

ProductsRouter.delete('/:id', deleteProductsHandler)

module.exports = ProductsRouter;