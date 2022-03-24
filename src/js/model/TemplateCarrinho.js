class TemplateCarrinho{
    static templateCarrinho(elementoPai){
        this.liCarrinho.id = this.idProduto
        this.liCarrinho.innerHTML = `
        <img class="imgCarrinho" src="${this.imgUrl}" alt="">
        <div  class="divOrdenarCarrinho">
            <div class="divFormatacaoCarrinho">
                <h2 class="h2Cardapio">${this.nomeProduto} <button class="botaoExcluirCarrinho"><img class="imgLixoCarrinho" src="./src/img/lixo1.jpg" alt=""></button></h2>
            </div>    
            <div class="divFormatacaoCarrinho">
                <p>${this.categoria}</p>
            </div>   
            <div class="divFormatacaoCarrinho">  
                <span class="preco">R$: ${this.preco.toFixed(2)}</span>
            </div>
        </div> 
        `;
        elementoPai.appendChild(this.liCarrinho)
    }

    static criarTemplate(elementoPai){
        this.liCardapio.innerHTML = `
                <img class="imgCardapio" src="${this.imgUrl}" alt="">
                <h2 class="h2Cardapio">${this.nomeProduto}</h2>
                <p>${this.descricao}</p>
                <span class="categoriaTemplateCardapiro"> ${this.categoria} </span>
                <div class="divPreco">
                    <span class="preco">R$: ${this.preco.toFixed(2)}</span> 
                    <button class="btnAddCarrinho"><img class="imgCart" src="./src/img/carrinho1.png" alt=""></button>
                </div>
        `;
        elementoPai.appendChild(this.liCardapio)
    }
}
export {TemplateCarrinho}