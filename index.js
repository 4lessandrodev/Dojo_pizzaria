const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3000;
const backlog = () => console.log(`Servidor rodando na porta ${port}`);
const routerPizza = require('./routes/pizzas');


app.listen(port, hostname, backlog);
app.use(routerPizza);
