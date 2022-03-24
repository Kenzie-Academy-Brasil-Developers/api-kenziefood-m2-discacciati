import{ listaProdutosPubli } from "../controllers/script.js"
import{ CardCarrinho } from "./cart.js"
import{ produto } from "../controllers/script.js"

const qtdCarrinho   = document.querySelector(".divQuantidadeCarrinho")
const ulCarrinho    = document.querySelector(".vitrineCarrinho-Listar")
const totalProdutos = document.querySelector(".divTotalCarrinho")


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
                <span class="categoriaTemplateCardapiro"> ${this.categoria} </span>
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
           
                const liCarrinho = new CardCarrinho(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.id)
                liCarrinho.templateCarrinho(ulCarrinho)
            
        })

        
        localStorage.setItem('carrinhoKF-g1pedro', JSON.stringify(produto))

        CardProduto.quantidadeCarrinho()
        CardProduto.somaTotal()
    }
    static quantidadeCarrinho(){
        return qtdCarrinho.innerHTML = `Quantidade ${produto.length}`
    }
    static somaTotal(){
        let soma = 0
        produto.map((elemento) =>{
            soma += elemento.preco
            return  totalProdutos.innerHTML = `Total R$:  ${soma.toFixed(2)}`  
        })
    }

    static filtrarPorBusca(valor, listaFonte){
        
        let valorMinusculo = valor.toLowerCase()

        let arrayResult = listaFonte.filter((elemento) =>{

            let categoriaFormatada = elemento.categoria.toLowerCase()
            let descricaoFormatada = elemento.descricao.toLowerCase()
            let nomeFormatado      = elemento.nome.toLowerCase()

            if(categoriaFormatada.includes(valorMinusculo) || descricaoFormatada.includes(valorMinusculo) || nomeFormatado.includes(valorMinusculo)){
                return elemento
            }
        })

        return arrayResult
    }

    static filtrarPorCategoria(categoria, listaFonte){

        let arrayResult = listaFonte.filter(value=>value.categoria === categoria)

        return arrayResult        
    }
}

