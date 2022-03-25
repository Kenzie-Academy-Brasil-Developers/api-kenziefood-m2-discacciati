import{ listaProdutosPubli } from "../controllers/script.js"
import{ produto } from "../controllers/script.js"
import{ CardProduto } from "./cards.js"


const produtosNoCarrinho = document.querySelector(".vitrineCarrinho-Listar")
const qtdCarrinho   = document.querySelector(".divQuantidadeCarrinho")


export class CardCarrinho{
    constructor(imgUrl, categoria, nomeProduto, preco, idProduto){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.preco       = preco
        this.idProduto   = idProduto

        this.liCarrinho  = document.createElement("li")
        this.liCarrinho.classList.add("carrinhoListar")
        this.liCarrinho.addEventListener("click", this)
    }
    
    templateCarrinho(elementoPai){
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

    handleEvent(){    
        const ulCarrinho = document.querySelector(".vitrineCarrinho-Listar")

        ulCarrinho.innerHTML = ""

        const target = event.target

        if(target.tagName == "BUTTON"){
            const targetLI = target.closest("li").id
            const arrayId = produto.map((elemento)=>{
                return elemento.id
            })
            const indexProduto = arrayId.indexOf(Number(targetLI))
            const carrinhoFiltrado = produto.filter((elemento, i) =>{
                return i != indexProduto
            })
            produto.splice(0)

            carrinhoFiltrado.forEach(elemento => 
            produto.push(elemento))
        }

        produto.forEach((elemento)=>{
            if(elemento.id == elemento.id){
                const liCarrinho = new CardCarrinho(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.id)
                liCarrinho.templateCarrinho(ulCarrinho)
            }
        })

        console.log(produto)
        localStorage.setItem('carrinhoKF-g1pedro', JSON.stringify(produto))

        this.quantidadeCarrinho()

        this.somaTotal()
    }

    quantidadeCarrinho(){
        return qtdCarrinho.innerHTML = `<div>Quantidade</div> <div>${produto.length}<div>`
    }

    somaTotal(){
        const total = document.querySelector('.divTotalCarrinho')
        total.innerHTML = produto.reduce((a, b) => {
            a += b.preco

            return a;
        }, 0)
        .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
  
    }
}