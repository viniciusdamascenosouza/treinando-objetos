const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1133557777", "2211114466"],
};

cliente.enderecos = [
    {
    rua: "R. Vinícius Damasceno",
    número: 989,
    apartamento: true,
    complemento: "apt 934",
    },
];

cliente.enderecos.push({
    rua: " R. Vinícius Souza",
    número: 100,
    apartamento: true,
    complemento: "apt 01",
});

console.log(cliente.enderecos);