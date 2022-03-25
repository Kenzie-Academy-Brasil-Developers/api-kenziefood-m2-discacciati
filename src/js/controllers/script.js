import { API } from "../model/api.js";
import { CardProduto } from "../model/cards.js"
import { CardCarrinho } from "../model/cart.js"

const armazenamentoLocal = localStorage.getItem('carrinhoKF-g1pedro')

let produto = []

if(armazenamentoLocal){
    produto = [...JSON.parse(localStorage.getItem('carrinhoKF-g1pedro'))]
}

//---------------Botão de Login-----------

const login  = document.querySelector('.btnLogin')
const logout = document.querySelector('#logoutHome')

if(API.infoUsuario.token){
    login.innerText = "Editar"
    login.style.backgroundColor = "green"
    logout.style.display = 'block'
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


let listaProdutosPubli = await API.listarProdutosPublico()

console.log(API.infoUsuario.token)

if(API.infoUsuario.token){
    let listaProdutosDoUsuario = await API.listarProdutosPorToken(API.infoUsuario.token)
    console.log(listaProdutosDoUsuario)
    listaProdutosPubli = listaProdutosPubli.concat(listaProdutosDoUsuario)
}

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



//------------Busca por produto---------

const inputBuscar = document.querySelector('.inputBuscar')

inputBuscar.addEventListener('keyup', ()=>{
    let valorBuscado = inputBuscar.value
    let listaProdutosBuscados

    if(valorBuscado !== ""){

        listaProdutosBuscados = CardProduto.filtrarPorBusca(valorBuscado, listaProdutosPubli)

        ulCardapio.innerHTML = ""

        listaProdutosBuscados.forEach((elemento) => {
            const liProduto = new CardProduto(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.preco, elemento.id)
            liProduto.criarTemplate(ulCardapio)
        })

    }else{

        ulCardapio.innerHTML = ""

        listaProdutosPubli.forEach((elemento) => {
            const liProduto = new CardProduto(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.preco, elemento.id)
            liProduto.criarTemplate(ulCardapio)
        })
    }
    
})
//-----------------------------------------------------------

//-------------------Filtros-------------------------

const filtros = document.querySelector('.listaDeBusca')

filtros.addEventListener('click', (event)=>{
    const valorFiltrado = event.target.classList.value
    let categoria =""

    if(valorFiltrado.includes('Bebidas')){
        categoria = 'Bebidas'
    }
    else if(valorFiltrado.includes('Frutas')){
        categoria = 'Frutas'
    }
    else if(valorFiltrado.includes('Pa')){
        categoria = 'Panificadora'       
    }
    
    if(valorFiltrado.includes('Todos')){
        ulCardapio.innerHTML = ""

        listaProdutosPubli.forEach((elemento) => {
            const liProduto = new CardProduto(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.preco, elemento.id)
            liProduto.criarTemplate(ulCardapio)
        })
    }
    else{
        
        const listaFiltrada = CardProduto.filtrarPorCategoria(categoria, listaProdutosPubli)

        ulCardapio.innerHTML = ""

        listaFiltrada.forEach((elemento) => {
            const liProduto = new CardProduto(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.preco, elemento.id)
            liProduto.criarTemplate(ulCardapio)
        })
    }
    
})
//--------------------------------------------------------------------------

const btnLogout = document.querySelector('.btnLogout')

btnLogout.addEventListener('click', ()=>{
    localStorage.removeItem('tokenKF-G1Pedro')
    location.reload()
})


const ulCarrinho = document.querySelector(".vitrineCarrinho-Listar")

produto.forEach((elemento)=>{           
    const liCarrinho = new CardCarrinho(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.id)
    liCarrinho.templateCarrinho(ulCarrinho)
})
CardProduto.quantidadeCarrinho()
CardProduto.somaTotal()



const btnExibirCarrinho = document.querySelector('.btnCarrinhoMobile')
const asideCarrinho     = document.querySelector('.asideCarrinho')
const ocultarCarrinho   = document.querySelector('.ocultarCarrinho')
const body              = document.querySelector('body')
const header            = document.querySelector('.headerVitrine')


btnExibirCarrinho.addEventListener('click', ()=>{
    asideCarrinho.style.display = 'block'
    body.style.background = 'rgba(0, 0, 0, 0.5)'
    header.style.background = 'rgba(0, 0, 0, 0)'
   
})

ocultarCarrinho.addEventListener('click', ()=>{
    asideCarrinho.style.display = 'none'
    body.style.background = 'white'
    header.style.background = 'white'
})


