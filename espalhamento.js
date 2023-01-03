const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1133557777", "2211114466"],
};

cliente.endereco = [
    {
    rua: "R. Vinícius Damasceno",
    numero: 989,
    apartamento: true,
    complemento: "apt 934",
    },
];

function ligaParaCliente (telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefoneResidencial}.`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
};

console.log(encomenda);