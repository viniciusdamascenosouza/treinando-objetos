const cliente = {
    nome: "João",
    idade: 32,
    cpf: "82938372982",
    email: "joao@dominio.com",
    tipo: "cliente VIP",
}

console.log(`${cliente["nome"]} tem ${cliente["idade"]} anos de idade, seu email é ${cliente["email"]}. ${cliente.nome} é um ${cliente["tipo"]}.`);

console.log(`Os três primeiros digitos do cpf são: ${cliente["cpf"].substring(0,3)}`)

const chaves = ["nome", "idade", "cpf", "email", "tipo", "teste"];

chaves.forEach( (chave)=> {
    console.log(`A chave "${chave}" tem valor "${cliente[chave]}"`)
})

