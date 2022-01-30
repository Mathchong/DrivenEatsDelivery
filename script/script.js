function selecionarAlimento(categoriaDaOpçao, elemento) {
    let opcao__compra = document.querySelector(categoriaDaOpçao + " .selecionado")
    if (opcao__compra !== null) {
        opcao__compra.classList.toggle("selecionado")
    }

    elemento.classList.toggle("selecionado")

    verifica3Selecionados()
}

function verifica3Selecionados() {
    let btn = document.querySelector(".fechar-pedido__btn")

    if (btn.innerHTML == "<p>Fechar pedido</p>") {
        return;
    }

    let prato = document.querySelector(".categoria__opcoes-pratos .selecionado")
    let bebida = document.querySelector(".categoria__opcoes-bebidas .selecionado")
    let sobremesa = document.querySelector(".categoria__opcoes-sobremesas .selecionado")

    if (((prato && bebida) && sobremesa) !== null) {

        let pedidoLink=criarLink()

        btn.innerHTML = ("<a href="+ pedidoLink + " target='blank'><p>Fechar pedido</p></a>")

        btn.classList.add("btn-verde")
    }
}

function fecharPedido() {
    let btn = document.querySelector(".btn-verde")
    if (btn !== null) {
    }
}

function criarLink() {
    let precoTotal = 0

    let nomePrato = document.querySelector(".categoria__opcoes-pratos .selecionado .opcao__nome")
    let nomeBebida = document.querySelector(".categoria__opcoes-bebidas .selecionado .opcao__nome")
    let nomeSobremesa = document.querySelector(".categoria__opcoes-sobremesas .selecionado .opcao__nome")

    let precoPrato = document.querySelector(".categoria__opcoes-pratos .selecionado .opcao__preco")
    let precoBebida = document.querySelector(".categoria__opcoes-bebidas .selecionado .opcao__preco")
    let precoSobremesa = document.querySelector(".categoria__opcoes-sobremesas .selecionado .opcao__preco")

    precoPrato = precoPrato.innerText
    precoBebida = precoBebida.innerText
    precoSobremesa = precoSobremesa.innerText

    precoPrato = precoPrato.substring(3,8)
    precoBebida = precoBebida.substring(3,8)
    precoSobremesa = precoSobremesa.substring(3,8)

    precoPrato = precoPrato.replace(',','.')
    precoBebida = precoBebida.replace(',','.')
    precoSobremesa = precoSobremesa.replace(',','.')

    precoPrato = parseFloat(precoPrato)
    precoBebida = parseFloat(precoBebida)
    precoSobremesa = parseFloat(precoSobremesa)

    precoTotal = precoPrato + precoBebida + precoSobremesa
    precoTotal = precoTotal.toFixed(2)

    let mensagem = "https://wa.me/552120180816?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0a-%20Prato:%20" + nomePrato.innerText +"%0a-%20Bebida:%20" +nomeBebida.innerText + "%0a-%20Sobremesa:%20" + nomeSobremesa.innerText + "%0aTotal:%20R$%20"+ precoTotal + "%0a%0aNome:%20Fulano%0aEndereço:%20Rua..."
    mensagem = mensagem.replaceAll(" ","%20")

    return mensagem
}