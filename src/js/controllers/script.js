import { API } from "../model/api.js";
import { CardProduto } from "../model/cards.js"
import { CardCarrinho } from "../model/cart.js"

let produto = []

//---------------Botão de Login-----------

const login = document.querySelector('.btnLogin')

if(localStorage.getItem('tokenKF-G1Pedro')){
    API.infoUsuario.token = localStorage.getItem('tokenKF-G1Pedro')
    login.innerText = "Editar"
    login.style.backgroundColor = "green"
}

login.addEventListener('click',()=>{
    if(login.innerText === 'Entrar'){
        window.location.href = "./src/paginas/login.html"
    }
    else{
        window.location.href = "./src/paginas/adm.html"
    }
})

//---------------------------------------------








const listaProdutosPubli = await API.listarProdutosPublico()
console.log(listaProdutosPubli)

const ulCardapio = document.querySelector(".vitrineCardapio-produtos")
// const ulCarrinho = document.querySelector(".vitrineCarrinho")

//Listando Produtos no cardapio//

listaProdutosPubli.forEach((elemento) => {
    const liProduto = new CardProduto(elemento.imagem, elemento.categoria, 
    elemento.nome, elemento.descricao, elemento.preco, elemento.id)
    liProduto.criarTemplate(ulCardapio)
})

//Listando Produtos no carrinho//


export { listaProdutosPubli }
export { produto }
