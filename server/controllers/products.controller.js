const Product = require('../models/products.model');

module.exports = {
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.json(allProducts)
            })
            .catch((err) => {
                res.json(err)
            });
    },

    findOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then((oneProduct) => {
                const product = JSON.parse(JSON.stringify(oneProduct))
                product.price = product.price.$numberDecimal
                res.json(product)
            })
            .catch((err) => { res.json(err) })
    },

    createNewProduct: (req, res) => {
        const { title, price, description } = req.body
        Product.create({
            title,
            price,
            description
        })
            .then((newProduct) => {
                res.json(newProduct)
            })
            .catch((err) => { res.json(err) })
    },

    updateProduct: (req, res) => {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(updatedProduct => {
                res.json(updatedProduct)
            })
            .catch((err) => { res.json(err) })
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => { res.json(err) })
    }
}