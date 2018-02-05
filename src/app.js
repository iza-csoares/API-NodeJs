'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


//Conecta ao Banco
mongoose.connect('mongodb://iza:root@ds062448.mlab.com:62448/str');

//Carrega as Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;









/*
200: ok
201: created
400: bad request
401: não autenticado
403: acesso negado
500: internal server erro
*/
