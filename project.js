let saldo = 0

function mostrarMensagem(mensagem) {
    document.getElementById('resultado').innerHTML = mensagem;
}

function depositarDinheiro() {
    let valor = parseFloat(prompt("Digite o valor para depositar:"))
    if (isNaN(valor) || valor <= 0) {
        mostrarMensagem("Valor inválido.");
        return;
    }
    saldo += valor;
        mostrarMensagem(`Depósito de R$ ${valor} realizado. Novo saldo: R$ $ ${saldo}`)
    }


function sacarDinheiro() {
   let valor = parseFloat(prompt("Digite o valor para sacar:"))

   if(valor > saldo) {
    mostrarMensagem("Valor Inválido")
    return;
   }
   saldo -= valor;
   mostrarMensagem(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${saldo}`)
}

function verificarSaldo() {
    return mostrarMensagem(`Seu saldo atual é: R$${saldo}`)
}

function sair() {
    return location.reload()
}