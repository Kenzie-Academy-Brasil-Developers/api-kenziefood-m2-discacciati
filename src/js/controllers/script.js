import { API } from "../model/api.js";
import { CardProduto } from "../model/cards.js"
import { CardCarrinho } from "../model/cart.js"


const testeUser = {
    email: 'teste77@email.com',
    password: 2022
}

const respostaAutenticaçao = await API.autenticarUsuario(testeUser)
console.log(respostaAutenticaçao)

const listaProdutosPubli = await API.listarProdutosPublico()
console.log(listaProdutosPubli)

const ulCardapio = document.querySelector(".vitrineCardapio-produtos")
const ulCarrinho = document.querySelector(".vitrineCarrinho")

//Listando Produtos no cardapio//

listaProdutosPubli.forEach((elemento) => {
    const liProduto = new CardProduto(elemento.imagem, elemento.categoria, 
    elemento.nome, elemento.descricao, elemento.preco, elemento.id)
    liProduto.criarTemplate(ulCardapio)
})

//Listando Produtos no carrinho//


export { listaProdutosPubli }

