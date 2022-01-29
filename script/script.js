function selecionarAlimento(categoriaDaOpçao,elemento){
    let opcao__compra=document.querySelector(categoriaDaOpçao + " .selecionado")
    if (opcao__compra!==null){
        opcao__compra.classList.toggle("selecionado")
    }

    elemento.classList.toggle("selecionado")

    verifica3Selecionados() 
}

function verifica3Selecionados(){
    let btn=document.querySelector(".fechar-pedido__btn")

    if(btn.innerHTML == "<p>Fechar pedido</p>"){
        return;
    }

    let prato=document.querySelector(".categoria__opcoes-pratos .selecionado")
    let bebida=document.querySelector(".categoria__opcoes-bebidas .selecionado")
    let sobremesa=document.querySelector(".categoria__opcoes-sobremesas .selecionado")

    if( ((prato && bebida)&&sobremesa) !== null){
        
        btn.innerHTML=("<p>Fechar pedido</p>")

        btn.classList.add("btn-verde")
    }
}

function fecharPedido(){
    
}