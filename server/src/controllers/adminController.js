const adminController = {
    dashboard: (req, res) => {
        // Lógica para la página de dashboard de administrador
        res.json({ message: 'Bienvenido al panel de administrador' });
    },
    addProduct: (req, res) => {
        // Lógica para agregar un nuevo producto (solo para administradores)
        res.json({ message: 'Producto agregado correctamente' });
    },
};

module.exports = adminController;