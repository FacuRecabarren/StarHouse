const { Product } = require('../db');


const createProductsDB = async (name, description, image, images, price, color) =>{
    return await Product.create({name, description, image, images, price, color})
}

const updateProductsDB = async (id, name, description, image, images, price, color) =>{

    let productToUpdate = await Product.findOne({
        where: {
            id: id,
        },
    });

    return await productToUpdate.update({
        name: name,
        description: description,
        price: price,
        image: image,
        images: images,
        color: color
    });

}

const getAllProducts = async () =>{
    const productsDB = await Product.findAll()
    
    return [...productsDB]
}

const getProductsByName = async (name) =>{
    const productsDbFiltered = await Product.findAll({
        where: {name: name}
    })

    return [...productsDbFiltered]
}

const getProductsById = async (id) =>{

    return await Product.findByPk(id);
}

const deleteProductsById = async (id) =>{

    const deleted = await Product.destroy({
        where: { id: id }
    });

    return deleted;
}

module.exports = {
    createProductsDB,
    getProductsById,
    getAllProducts,
    getProductsByName,
    updateProductsDB,
    deleteProductsById
}