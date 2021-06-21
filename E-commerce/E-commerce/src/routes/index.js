const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../public/images'));
    },
    filename: (req, file, cb) =>{
        const newFilename = file.originalname;
        cb(null, newFilename);
    }
});
const upload = multer({storage: storage});
const indexController = require('../controllers/index');


//---------------HOME--------------
router.get("/", indexController.index);
//---------------CARRITO DE USUARIO--------------
router.get("/cart", indexController.cart);
router.get("/cart/:idProd", indexController.saveCart);

module.exports = router;