const dados = require("./cliente.json");

console.log(dados);

console.log(typeof dados);

const clientesEmString = JSON.stringify(dados);

console.log(clientesEmString);

console.log(typeof clientesEmString);

console.log(clientesEmString.nome);

const objetoCliente = JSON.parse(clientesEmString);

console.log(objetoCliente);