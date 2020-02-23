const express = require('express');
const router = express.Router();
const PizzaController = require('../controllers/PizzaController');

//http://localhost:3000
router.get('/', PizzaController.listar);
//http://localhost:3000/cadastrarpizza/Franbacon/Salgada/18
router.get('/cadastrarpizza/:nome/:categoria/:preco', PizzaController.cadastrarPizza);
//http://localhost:3000/pedirpizza/Calabresa/Alessandro
router.get('/pedirpizza/:nomepizza/:nomecliente', PizzaController.realizarPedido);
//http://localhost:3000/listarpedidos
router.get('/listarpedidos', PizzaController.listarPedidos);


module.exports = router;