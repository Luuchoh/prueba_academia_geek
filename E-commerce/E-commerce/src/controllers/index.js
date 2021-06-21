const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const cartFilePath = path.join(__dirname, '../data/cart.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const indexController = {
    index: (req, res) =>{
        res.render('./user/index', {productos: products});
    },
    
    cart:  (req, res) =>{
        res.render('./user/productCart');
    },

    saveCart:(req, res) =>{
        let filtro = products.filter(product => (product.id == req.params.idProd));
        let prod = filtro;
        let idMax = 0;
		let newProd = {};
        let cart = fs.readFileSync(cartFilePath, 'utf-8');
        console.log(cart);

        if(cart.length > 10){
            let cart = JSON.parse(cart)
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id > idMax){
                    idMax = cart[i].id;
                }
            }
        }
        newProd = {
            'id': idMax,
            'prod': prod
        }
        cart.push(newProd)
        fs.writeFileSync(cartFilePath, JSON.stringify(cart));
        let redirec = '/cart';
		res.redirect(redirec);
    }
};

module.exports = indexController;





