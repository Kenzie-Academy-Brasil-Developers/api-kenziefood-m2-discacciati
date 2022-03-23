import { API } from "../model/api.js";
import { Adm } from "../model/adm.js";


const listaProdutosPubli = await API.listarProdutosPublico()
console.log(listaProdutosPubli)

const ulVitrineAdm = document.querySelector(".vitrineAdm-produtos")


// Listar Produtos no Adm
listaProdutosPubli.forEach((elemento) => {
    const liProduto = new Adm(elemento.imagem, elemento.categoria, 
    elemento.nome, elemento.descricao, elemento.id)
    liProduto.criarTemplate(ulVitrineAdm)
})

export { listaProdutosPubli }

//------------Busca por produto---------

const inputBuscar = document.querySelector('.inputBuscar')

inputBuscar.addEventListener('keyup', ()=>{
    let valorBuscado = inputBuscar.value
    let listaProdutosBuscados

    if(valorBuscado !== ""){

        listaProdutosBuscados = Adm.filtrarPorBusca(valorBuscado, listaProdutosPubli)

        ulVitrineAdm.innerHTML = ""

        listaProdutosBuscados.forEach((elemento) => {
            const liProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            liProduto.criarTemplate(ulVitrineAdm)
        })

    }else{

        ulVitrineAdm.innerHTML = ""

        listaProdutosPubli.forEach((elemento) => {
            const liProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            liProduto.criarTemplate(ulVitrineAdm)
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

        ulVitrineAdm.innerHTML = ""

        listaProdutosPubli.forEach((elemento) => {
            const liProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            liProduto.criarTemplate(ulVitrineAdm)
        })
    }
    else{
        
        const listaFiltrada = Adm.filtrarPorCategoria(categoria, listaProdutosPubli)

        ulVitrineAdm.innerHTML = ""

        listaFiltrada.forEach((elemento) => {
            const liProduto = new Adm(elemento.imagem, elemento.categoria, 
            elemento.nome, elemento.descricao, elemento.id)
            liProduto.criarTemplate(ulVitrineAdm)
        })
    }
    
})
//--------------------------------------------------------------------------