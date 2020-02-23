const PizzaModel = require('../models/PizzaModel');


module.exports = {

  listar: (req, res) => {
    //http://localhost:3000
    res.send(PizzaModel.listarPizzas());
  },
  cadastrarPizza: (req, res) => {
    //http://localhost:3000/cadastrarpizza/Franbacon/Salgada/18
    res.send(PizzaModel.adicionarNovaPizza(req.params.nome, req.params.categoria, req.params.preco));
  },
  realizarPedido: (req, res) => {
    //http://localhost:3000/pedirpizza/Calabresa/Alessandro
    res.send(PizzaModel.realizarPedido(req.params.nomepizza, req.params.nomecliente));
  },
  //http://localhost:3000/listarpedidos
  listarPedidos: (req, res) => {
    res.send(PizzaModel.listarPedidos());
  }

};

