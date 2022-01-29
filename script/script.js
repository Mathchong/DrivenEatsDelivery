function selecionarAlimento(categoriaDaOpçao,elemento){
    let opcao__compra=document.querySelector(categoriaDaOpçao + " .selecionado")
    if (opcao__compra!==null){
        opcao__compra.classList.toggle("selecionado")
    }

    elemento.classList.toggle("selecionado")

}