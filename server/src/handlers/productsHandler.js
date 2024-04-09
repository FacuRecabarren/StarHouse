const { createProductsDB, getProductsById, getAllProducts, getProductsByName, updateProductsDB, deleteProductsById} = require("../controllers/productControllers")

const getProductsHandler = async (req, res) =>{

    const { name } = req.query;

    try {
        if(name){
            const productsByName = await getProductsByName(name)
            res.status(200).json(productsByName)
        }else{
            const allProducts = await getAllProducts();
            res.status(200).json(allProducts)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getDetailProductsHandler = async (req, res) =>{

    const { id } = req.params;

    try {
        const response = await getProductsById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createProductsHandler = async (req, res) =>{
    const {name, description, image, images, price, color} = req.body;
    try {
        const response = await createProductsDB(name, description, image, images, price, color)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateProductsHandler = async (req, res) => {

    const { id, name, description, image, images, price, color } = req.body;

    try {
        const response = await updateProductsDB(id, name, description, image, images, price, color);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProductsHandler = async (req, res) =>{
    const { id } = req.params;
    try {
        await deleteProductsById(id)
        res.status(200).send("El producto se eliminó correctamente")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDetailProductsHandler,
    getProductsHandler,
    createProductsHandler,
    updateProductsHandler,
    deleteProductsHandler
}