const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
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
const productController = require('../controllers/producto');


//--------------DETALLE DEL PRODUCTO----------------------
router.get("/detalle/:idProd", productController.producto);

//------------------LISTADO-------------------------
router.get("/listado", productController.listado);


module.exports = router;