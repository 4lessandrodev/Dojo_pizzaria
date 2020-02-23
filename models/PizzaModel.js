const PizzaModel = {};

PizzaModel.pedidos = [
  {
    cliente: 'João',
    pizza: [{
      nome: "Calabresa",
      categoria: "Salgada",
      preco: 10
    }],
    total: 10
  }, {
    cliente: 'Luana',
    pizza: [{
      nome: "Mussarela",
      categoria: "Salgada",
      preco: 12
    }],
    total: 12
  }, {
    cliente: 'Karine',
    pizza: [{
      nome: "Brócolis",
      categoria: "Vegetariana",
      preco: 30
    }],
    total: 30
  }, {
    cliente: 'Aline',
    pizza: [{
      nome: "Mussarela",
      categoria: "Salgada",
      preco: 12
    }],
    total: 12
  }
];

PizzaModel.pizzas = [{
  nome: "Calabresa",
  categoria: "Salgada",
  preco: 10
},
{
  nome: "Mussarela",
  categoria: "Salgada",
  preco: 12
},
{
  nome: "Chocolate",
  categoria: "Doce",
  preco: 15
},
{
  nome: "Brócolis",
  categoria: "Vegetariana",
  preco: 30
}];

//Listar todas as pizzas cadastradas -------------------
PizzaModel.listarPizzas = () => {
  let conteudo = '';
  for (let pizza of PizzaModel.pizzas) {
    conteudo += `
      <li>Pizza: ${pizza.nome}</li>
      <li>Categoria: ${pizza.categoria}</li>
      <li>Preço: R$ ${pizza.preco.toFixed(2)}</li>
      <p>---------------------</p>
    `;
  }
  return (PizzaModel.pizzas[0] == undefined) ? 'Nenhuma pizza cadastrada' : conteudo;
};



//Adicionar uma nova pizza ------------------------------
PizzaModel.adicionarNovaPizza = (nome, categoria, preco) => {
  //Validar valores informados pelo usuario
  if (nome && categoria && !isNaN(preco)) {
    //Criar um novo objeto pizza
    let pizza = {
      nome, categoria, preco: parseFloat(preco)
    };
    //Adicionar a pizza na lista de pizzas cadastradas
    PizzaModel.pizzas.push(pizza);
    return `Pizza ${nome} cadastrada com sucesso`;
  } else {
    return 'Não foi possível cadastrar a pizza, verifique os valores informados!';
  }
};



//Realizar pedido 
PizzaModel.realizarPedido = (nomePizza, nomeCliente) => {
  //Buscar o objeto pizza que tenha o nome informado pelo usuário 
  let pizzaEncontrada = PizzaModel.pizzas.find(pizza => pizza.nome == nomePizza);
  //Verificar se o usuário já possui algum pedido em aberto
  let jaTemPedido = PizzaModel.pedidos.find(pedido => pedido.cliente == nomeCliente);
  //Verificar se encontrou uma pizza
  if (pizzaEncontrada) {
    //Verificar se foi encontrado algum pedido em "aberto" para o usuário informado 
    if (jaTemPedido) {
      jaTemPedido.pizza.push(pizzaEncontrada);
      jaTemPedido.total += pizzaEncontrada.preco;
      return `Pedido anotado +${jaTemPedido.pizza.length} PIZZAS TOTAL: R$ ${jaTemPedido.total.toFixed(2)}, agora é só aguardar suas pizzas!`;
    } else {
      PizzaModel.pedidos.push({
        cliente: nomeCliente,
        pizza: [pizzaEncontrada],
        total: pizzaEncontrada.preco
      });
      return `Pedido anotado PIZZA: ${pizzaEncontrada.nome} TOTAL: R$ ${pizzaEncontrada.preco.toFixed(2)}, agora é só aguardar sua pizza!`;
    }
  } else {
    return `Não encontrei a PIZZA ${nomePizza} em nosso CARDÁPIO! :(`;
  }
};


//Listar pedidos 
PizzaModel.listarPedidos = () => {
  let conteudo = '';
  for (let pedido of PizzaModel.pedidos) {
    let pizzas = '';
    for (let pizza of pedido.pizza) {
      pizzas += `${pizza.nome}, `;
    }
    conteudo += `
    <li>Cliente: ${pedido.cliente}</li>
    <li>Pizzas: ${pizzas}</li>
    <li>Total: R$ ${pedido.total.toFixed(2)}</li>
    <p>---------------------</p>
    `;
  }
  return (PizzaModel.pedidos.length > 0) ? conteudo : 'Nenhum pedido até o momento';
};


module.exports = PizzaModel;
