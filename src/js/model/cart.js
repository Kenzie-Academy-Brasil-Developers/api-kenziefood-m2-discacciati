import{ listaProdutosPubli } from "../controllers/script.js"

export class CardCarrinho{
    constructor(imgUrl,categoria, nomeProduto, preco, idProduto){
        this.imgUrl      = imgUrl
        this.nomeProduto = nomeProduto
        this.categoria   = categoria
        this.preco       = preco
        this.idProduto   = idProduto

        this.liCarrinho  = document.createElement("li")
        this.liCarrinho.classList.add("carrinhoListar")
        this.liCarrinho.addEventListener("click", this)
    }

    templateCarrinho(elementoPai){
            this.liCarrinho.innerHTML = `
            <img class="imgCarrinho" src="${this.imgUrl}" alt="">
            <div class="divFormatacaoCarrinho">
                <h2 class="h2Cardapio">${this.nomeProduto} <button class="botaoExcluirCarrinho"></button></h2>
            </div>    
            <div class="divFormatacaoCarrinho">
                <p>${this.categoria}</p>
            </div>   
            <div class="divFormatacaoCarrinho">  
                <span class="preco">R$: ${this.preco.toFixed(2)}</span>
            </div> 
            `;
            elementoPai.appendChild(this.liCarrinho)
    }

    handleEvent(){
        // let produto = listaProdutosPubli.filter((elemento) => {
        //     elemento.id == this.idProduto
        // })

    }
}