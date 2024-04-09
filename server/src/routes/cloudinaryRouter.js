const { Router } = require('express');
const cloudinary = require('cloudinary').v2;
const cloudinaryRouter = Router();

cloudinaryRouter.post('/', (req, res) => {
    try {
        const imagen = req.files.imagen;

        cloudinary.uploader.upload(imagen.tempFilePath, (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error al cargar la imagen' });
            }

            console.log(result);
            return res.status(200).json({ url: result.secure_url });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = cloudinaryRouter;