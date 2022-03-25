import { API } from "../model/api.js";
import { Adm } from "../model/adm.js";


const listaProdutosPubli = await API.listarProdutosPorToken(API.infoUsuario.token)
console.log(listaProdutosPubli)

export const tableVitrineAdm = document.querySelector(".vitrineAdm-produtos")


// Listar Produtos no Adm
listaProdutosPubli.forEach((elemento) => {
    const trProduto = new Adm(elemento.imagem, elemento.categoria, 
    elemento.nome, elemento.descricao, elemento.id, elemento.preco)
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

const btnLogout = document.querySelector('.btnLogout')

btnLogout.addEventListener('click', ()=>{
    localStorage.removeItem('tokenKF-G1Pedro')
    location.assign('./../../index.html')
})
//--------------------------------------------------------------------------

const btnAdicionarProduto = document.querySelector('.adicionarProduto')
const modalAdicionar = document.querySelector('.modalAdicionar')
let categoria = ''

btnAdicionarProduto.addEventListener('click', ()=>{

    modalAdicionar.style.display = 'flex'    
    
    const btnPaniCatAdd        = document.querySelector('#btnPaniCatAdd')
    const btnFrutCatAdd        = document.querySelector('#btnFrutCatAdd')
    const btnBebCatAdd         = document.querySelector('#btnBebCatAdd')
    

    btnPaniCatAdd.addEventListener('click', ()=>{
        btnPaniCatAdd.style.background = '#FF2253'
        btnPaniCatAdd.style.color = '#F8F9FA'

        categoria = 'Panificadora'
    })
    btnFrutCatAdd.addEventListener('click', ()=>{
        btnFrutCatAdd.style.background = '#FF2253' 
        btnFrutCatAdd.style.color = '#F8F9FA'

        categoria = 'Frutas'
    })
    btnBebCatAdd.addEventListener('click', ()=>{
        btnBebCatAdd.style.background = '#FF2253' 
        btnBebCatAdd.style.color = '#F8F9FA'

        categoria = 'Bebidas'
    })
      

    const modalExitAdd = document.querySelector('.modalExitAdd')
    modalExitAdd.addEventListener('click', ()=>{
        modalAdicionar.style.display = 'none'
    })

    
})

const btnModSaveChangesAdd = document.querySelector('#btnModSaveChangesAdd')
    btnModSaveChangesAdd.addEventListener('click', async function () {

        const inputModAddNome      = document.querySelector('#inputModAddNome')
        const inputModAddDesc      = document.querySelector('#inputModAddDesc')
        const inputModAddValor     = document.querySelector('#inputModAddValor')
        const inputModAddUrl       = document.querySelector('#inputModAddUrl')

        const dadosProduto = {
            nome: inputModAddNome.value,
            preco: Number(inputModAddValor.value),
            categoria: categoria,
            imagem: inputModAddUrl.value,
            descricao: inputModAddDesc.value  
        }
        
        const response = await API.criarProduto(API.infoUsuario.token, dadosProduto)            

        let listaAtualizada = await API.listarProdutosPorToken(API.infoUsuario.token)
            console.log(listaAtualizada)

            Adm.elementoTabela.innerHTML = ""

           listaAtualizada.forEach((elemento) => {
                const trProduto = new Adm(elemento.imagem, elemento.categoria, 
                elemento.nome, elemento.descricao, elemento.id, elemento.preco)
                trProduto.criarTemplate(Adm.elementoTabela)
            })

            if(response.id){
                console.log('tem id')
            }
            else{

                console.log('nao tem id')
            }

            inputModAddNome.value = ''     
            inputModAddDesc.value = '' 
            inputModAddValor.value = '' 
            inputModAddUrl.value = '' 
            
            categoria = ''

            btnPaniCatAdd.style.backgroundColor = '#F8F9FA'
            btnPaniCatAdd.style.color = '#868E96'
            btnFrutCatAdd.style.backgroundColor = '#F8F9FA'
            btnFrutCatAdd.style.color = '#868E96'
            btnBebCatAdd.style.backgroundColor = '#F8F9FA'
            btnBebCatAdd.style.color = '#868E96'

            modalAdicionar.style.display = 'none'
    })

