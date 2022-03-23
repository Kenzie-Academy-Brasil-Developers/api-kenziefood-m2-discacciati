import{ listaProdutosPubli } from "../controllers/script.js"
import{ CardCarrinho } from "./cart.js"

const qtdCarrinho = document.querySelector(".divQuantidadeCarrinho")
const ulCarrinho = document.querySelector(".vitrineCarrinho-Listar")
const totalProdutos = document.querySelector(".divTotalCarrinho")

let produto = []

export class CardProduto{
    constructor(imgUrl, categoria, nomeProduto, descricao, preco, idProduto){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.descricao   = descricao
        this.preco       = preco
        this.idProduto   = idProduto

        this.liCardapio  = document.createElement("li")
        this.liCardapio.classList.add("vitrineCardapio-produtos-listar")
        this.liCardapio.addEventListener("click", this)
    }

    criarTemplate(elementoPai){
        this.liCardapio.innerHTML = `
                <img class="imgCardapio" src="${this.imgUrl}" alt="">
                <h2 class="h2Cardapio">${this.nomeProduto}</h2>
                <p>${this.descricao}</p>
                <div class="divPreco">
                    <span class="preco">R$: ${this.preco.toFixed(2)}</span> 
                    <button class="btnAddCarrinho"><img class="imgCart" src="./src/img/carrinho1.png" alt=""></button>
                </div>
        `;
        elementoPai.appendChild(this.liCardapio)
    }

    handleEvent(){
        ulCarrinho.innerHTML = ""
        produto.push(listaProdutosPubli.filter((elemento) => {
            return elemento.id === this.idProduto   
        })[0])
        produto.forEach((elemento)=>{
            if(elemento.id == elemento.id){
                const liCarrinho = new CardCarrinho(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco)
                liCarrinho.templateCarrinho(ulCarrinho)
            }
        })
        this.quantidadeCarrinho()
        this.somaTotal()
    }
    quantidadeCarrinho(){
        console.log(produto)
        
        return qtdCarrinho.innerHTML = `Quantidade ${produto.length}`
    }
    somaTotal(){

        let soma = 0
        produto.map((elemento) =>{
            soma += elemento.preco
            console.log(soma)
            return  totalProdutos.innerHTML = `Total R$:  ${soma.toFixed(2)}`  
        })



        // return totalProdutos.innerHTML = somaProdutos
        
    }
}





//  <li class="vitrineCardapio-produtos-listar">
//                     <img class="imgCardapio" src="./src/img/hamburguer.jpg" alt="">
//                     <h2 class="h2Cardapio">Hamburguer Artesanal</h2>
//                     <p>um delicioso hamburguer com queijo e bacon acompanhado
//                     de batatas fritas e maionese caseira</p>
//                     <div class="divPreco">
//                         <span class="preco">R$: 29,90</span> 
//                         <button class="btnAddCarrinho"><img class="imgCart" src="./src/img/carrinho1.png" alt=""></button>
//                     </div>
//                 </li> 