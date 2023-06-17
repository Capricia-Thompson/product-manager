const productsController = require('../controllers/products.controller');

const { findAllProducts, findOneProduct, createNewProduct, updateProduct, deleteProduct } = productsController;

module.exports = app => {
    app.get('/api/products', findAllProducts);
    app.get('/api/products/:id', findOneProduct);
    app.patch('/api/products/:id', updateProduct);
    app.post('/api/products', createNewProduct);
    app.delete('/api/products/:id', deleteProduct);
}