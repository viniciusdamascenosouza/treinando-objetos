const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1133557777", "2211114466"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente.");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso! Novo saldo: ${this.saldo}.`);
        }
    }
};

cliente.efetuaPagamento(50);
