const { User } = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { username, password, userType, name, lastname, email } = req.body;

        // Verifica si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Cifra la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea el nuevo usuario
        const newUser = await User.create({ username, password: hashedPassword, userType, lastname, name, email });

        res.status(201).json({ message: 'Usuario registrado correctamente', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Busca el usuario en la base de datos
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Verifica la contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Genera un token JWT
        const token = jwt.sign({ userId: user.id, userType: user.userType }, 'secreto', { expiresIn: '1h' });

        res.json({ message: 'Inicio de sesión exitoso', token, user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


module.exports = {
    register,
    login,
};