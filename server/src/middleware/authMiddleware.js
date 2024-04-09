const jwt = require('jsonwebtoken');
const { User } = require('../db');

const authenticateAdmin = async (req, res, next) => {
    // Obtiene el token del encabezado de autorización
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        // Decodifica el token JWT
        const decodedToken = jwt.verify(token, 'secreto');

        // Obtiene el usuario desde la base de datos
        const user = await User.findByPk(decodedToken.userId);
        if (!user || user.userType !== 'admin') {
            return res.status(403).json({ message: 'Acceso denegado para administradores' });
        }

        // Agrega el usuario decodificado a la solicitud
        req.user = decodedToken;

        // Permite el acceso a la siguiente capa (ruta protegida)
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Token no válido' });
    }
};

const authenticateUser = async (req, res, next) => {
    // Obtiene el token del encabezado de autorización
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        // Decodifica el token JWT
        const decodedToken = jwt.verify(token, 'secreto');

        // Obtiene el usuario desde la base de datos
        const user = await User.findByPk(decodedToken.userId);
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Agrega el usuario decodificado a la solicitud
        req.user = decodedToken;

        // Permite el acceso a la siguiente capa (ruta protegida)
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Token no válido' });
    }
};

module.exports = {
    authenticateAdmin,
    authenticateUser
};