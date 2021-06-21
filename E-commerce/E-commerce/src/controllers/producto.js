const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productController = {
    producto: (req, res) =>{
        let filtro = products.filter(product => (product.id == req.params.idProd));
        let prod = filtro[0];
        for (let i = 0; i < prod; i++) {
            prod.push(prod);     
        }
        res.render('./products/productDetail', {product: prod, producto: products});
    },
    
    listado: (req, res) =>{
        res.render('./products/productList', {producto: products});
    }
};

module.exports = productController;