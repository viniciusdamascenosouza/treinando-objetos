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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("Endereço")){
    
}