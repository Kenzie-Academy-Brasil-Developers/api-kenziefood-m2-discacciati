import { API } from "../model/api.js";
import { Adm } from "../model/adm.js";


const listaProdutosPubli = await API.listarProdutosPublico()
console.log(listaProdutosPubli)


const tableVitrineAdm = document.querySelector(".vitrineAdm-produtos")


// Listar Produtos no Adm
listaProdutosPubli.forEach((elemento) => {
    const trProduto = new Adm(elemento.imagem, elemento.categoria, 
    elemento.nome, elemento.descricao, elemento.id)
    trProduto.criarTemplate(tableVitrineAdm)
})

export { listaProdutosPubli }

//------------Busca por produto---------

const inputBuscar = document.querySelector('.inputBuscar')

inputBuscar.addEventListener('keyup', ()=>{
    let valorBuscado = inputBuscar.value
    let listaProdutosBuscados

    if(valorBuscado !== ""){

        listaProdutosBuscados = Adm.filtrarPorBusca(valorBuscado, listaProdutosPubli)

        tableVitrineAdm.innerHTML = ""

        listaProdutosBuscados.forEach((elemento) => {
            const trProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            trProduto.criarTemplate(tableVitrineAdm)
        })

    }else{

        tableVitrineAdm.innerHTML = ""

        listaProdutosPubli.forEach((elemento) => {
            const trProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            trProduto.criarTemplate(tableVitrineAdm)
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

        tableVitrineAdm.innerHTML = ""

        listaProdutosPubli.forEach((elemento) => {
            const trProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            trProduto.criarTemplate(tableVitrineAdm)
        })
    }
    else{
        
        const listaFiltrada = Adm.filtrarPorCategoria(categoria, listaProdutosPubli)

        tableVitrineAdm.innerHTML = ""

        listaFiltrada.forEach((elemento) => {
            const trProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            trProduto.criarTemplate(tableVitrineAdm)
        })
    }
    
})
//--------------------------------------------------------------------------