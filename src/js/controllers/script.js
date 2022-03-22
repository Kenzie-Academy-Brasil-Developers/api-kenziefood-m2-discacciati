import { API } from "../model/api.js";
import { CardProduto } from "../model/cards.js"
import { CardCarrinho } from "../model/cart.js"


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

