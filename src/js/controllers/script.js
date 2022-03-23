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