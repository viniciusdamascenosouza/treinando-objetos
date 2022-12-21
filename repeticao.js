const cliente = {
    Nome: "João",
    Idade: 24,
    Email: "joao@firma.com",
    Telefone: ["1133557777", "2211114466"],
};

cliente.Endereço = [
    {
    Rua: "R. Vinícius Damasceno",
    Número: 989,
    Apartamento: true,
    Complemento: "apt 934",
    },
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];

    if (tipo !== 'object' && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}