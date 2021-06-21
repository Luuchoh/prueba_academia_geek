const express = require('express');
const app = express();
const path = require('path');
const cookies = require('cookie-parser');
// Pasar poder usar los métodos PUT y DELETE
const methodOverride =  require('method-override'); 
//middlewarw 404
const error404 = require('./src/middlewares/error404');
//Aqui llamamos al router de las páginas de usuarios
var indexRouter = require('./src/routes/index');
//Aqui llamamos al router de las páginas de productos
var productRouter = require('./src/routes/producto');

const publicPath = path.resolve(__dirname, './public');

app.use(cookies());

app.use(methodOverride('_method'));
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));


app.listen(3001, console.log("Server's up! Port 3001"));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/producto', productRouter);
app.use(error404);