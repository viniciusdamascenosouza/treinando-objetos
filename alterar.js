var pessoa = {
    nome: "Luma",
    profissão: "Engenheira",
};


console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 22334444"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva"

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro Souza",
    profissão: "Pintor",
    telefone: "9988776666",
}

pessoa = novaPessoa;

console.log(pessoa)
