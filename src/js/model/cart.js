export class CardCarrinho{
    constructor(imgUrl,nomeProduto, categoria, preco, id){
        this.imgUrl      = imgUrl
        this.nomeProduto = nomeProduto
        this.categoria   = categoria
        this.preco       = preco
        this.id          = id

        this.liCarrinho  = document.createElement("li")
        this.liCarrinho.classList.add("carrinhoListar")
        this.liCarrinho.addEventListener("click", this)
    }

    templateCarrinho(elementoPai){
            this.liCarrinho.innerHTML = `
            <img class="imgCarrinho" src="${this.imgUrl}" alt="">
            <h2 class="h2Cardapio">${this.nome}</h2>
            <p>this.categoria</p>
            <span class="preco">R$: ${this.preco}</span>
            `
            elementoPai.appendChild(liCarrinho)
    }

    handleEvent(){
        console.log(this.nomeProduto)
    }
}