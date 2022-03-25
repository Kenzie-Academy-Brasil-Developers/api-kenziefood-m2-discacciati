import { API } from "./api.js"
import { tableVitrineAdm } from "../controllers/controllerAdm.js"

export class Adm {
    constructor(imgUrl, categoria, nomeProduto, descricao, idProduto, preco){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.descricao   = descricao
        this.idProduto   = idProduto
        this.preco       = preco

        this.trAdm  = document.createElement("tr")
        this.trAdm.classList.add("vitrineAdm-produtos-listar")
        this.trAdm.addEventListener("click", this) //Assim o js procura o handleEvent
    }

    static elementoTabela = document.querySelector('.vitrineAdm-produtos')

    static produtoExclusao  
    static produtoEdicao = {}


    criarTemplate(elementoPai){
        this.trAdm.innerHTML = `
                <td class="vitrineAdm-produtos-listar-td-1">
                    <img class="imgAdm" src="${this.imgUrl}" alt="">
                </td>
                <td class="vitrineAdm-produtos-listar-td-2">
                    <h2 class="h2Adm">${this.nomeProduto}</h2>
                </td>
                <td class="vitrineAdm-produtos-listar-td-3"class="divCategoriasAdm">
                    <button class="divCategoriaAdmBtn">${this.categoria}</button>
                </td>
                <td class="vitrineAdm-produtos-listar-td-4">
                <p class="block-with-text" alt="oi">${this.descricao}</p>
                </td>
                <td class="vitrineAdm-produtos-listar-td-5"class="divAcaoAdm">

                   <button class="btnEditarAdm" title="Editar"><img class="imgAdmAcao" id="btnEditarAdm" src="../img/lapisEditar.png"></button>
                   <button class="btnExcluirAdm" title="Excluir"><img class="imgAdmAcao" id="btnExcluirAdm" src="../img/lixoDelete.png"></button>
                </td>
        `
        elementoPai.appendChild(this.trAdm)
    }


    async handleEvent(event){
      
      const modalEdicao = document.querySelector('.modalEdicao')
      const btnModSaveChanges = document.querySelector('#btnModSaveChanges')

        if(event.target.id === 'btnEditarAdm'){

            const inputModEditNome  = document.querySelector('#inputModEditNome')
            const inputModEditDesc  = document.querySelector('#inputModEditDesc')
            const inputModEditValor = document.querySelector('#inputModEditValor')
            const inputModEditUrl   = document.querySelector('#inputModEditUrl')
            const btnPaniCat        = document.querySelector('#btnPaniCat')
            const btnFrutCat        = document.querySelector('#btnFrutCat')
            const btnBebCat         = document.querySelector('#btnBebCat')
            
            Adm.produtoEdicao = {...this}
            inputModEditNome.value  = Adm.produtoEdicao.nomeProduto
            inputModEditDesc.value  = Adm.produtoEdicao.descricao
            inputModEditValor.value = Adm.produtoEdicao.preco
            inputModEditUrl.value   = Adm.produtoEdicao.imgUrl

            btnPaniCat.addEventListener('click', () =>{
                btnPaniCat.style.background = '#FF2253'
                btnPaniCat.style.color = '#F8F9FA'

                Adm.produtoEdicao.categoria = 'Panificadora'
                console.log(Adm.produtoEdicao)
            })
            btnFrutCat.addEventListener('click', () =>{
                btnFrutCat.style.background = '#FF2253' 
                btnFrutCat.style.color = '#F8F9FA'

                Adm.produtoEdicao.categoria = 'Frutas'
            })
            btnBebCat.addEventListener('click', () =>{
                btnBebCat.style.background = '#FF2253' 
                btnBebCat.style.color = '#F8F9FA'

                Adm.produtoEdicao.categoria = 'Bebidas'
            })

            if(Adm.produtoEdicao.categoria === 'Panificadora'){
                btnPaniCat.style.background = '#FF2253' 
                btnPaniCat.style.color = '#F8F9FA'
            }
            if(Adm.produtoEdicao.categoria === 'Frutas'){
                btnFrutCat.style.background = '#FF2253' 
                btnFrutCat.style.color = '#F8F9FA'
            }
            if(Adm.produtoEdicao.categoria === 'Bebidas'){
                btnBebCat.style.background = '#FF2253' 
                btnBebCat.style.color = '#F8F9FA'
            }

            modalEdicao.style.display = 'flex'
        }

        const modalExit = document.querySelector('.modalExit')
        modalExit.addEventListener('click', () =>{
            modalEdicao.style.display = 'none'
        })

        btnModSaveChanges.addEventListener('click', async function () {
            
            const dadosProduto = {
            nome: inputModEditNome.value,
            descricao: inputModEditDesc.value,
            preco: inputModEditValor.value,
            imgem: inputModEditUrl.value,
            categoria: Adm.produtoEdicao.categoria
            }

            modalEdicao.style.display = 'none'
          
            const response = await API.atualizarProduto(API.infoUsuario.token,dadosProduto, Adm.produtoEdicao.idProduto)

            console.log(response)           

            let listaAtualizada = await API.listarProdutosPorToken(API.infoUsuario.token)
            console.log(listaAtualizada)

            Adm.elementoTabela.innerHTML = ""

           listaAtualizada.forEach((elemento) => {
                const trProduto = new Adm(elemento.imagem, elemento.categoria, 
                elemento.nome, elemento.descricao, elemento.id, elemento.preco)
                trProduto.criarTemplate(Adm.elementoTabela)
            })
                                  
        })
      
      
        if( event.target.id == "btnExcluirAdm"){
           const elementoPai = document.querySelector('#divsAdm')
           Adm.deletarPost(elementoPai) 
           Adm.produtoExclusao = this.idProduto
            
           const elementoFilho = document.querySelector(".divAdm-DeletarPost")
            const btnDeletarConfirm = document.querySelector('.divAdm-DeletarPost')
            btnDeletarConfirm.addEventListener('click', async function(event){
                
                    if( event.target.classList.value =="btn-divAdm-Deletar"){
                      const apiExcluir = await API.excluirProduto(API.infoUsuario.token, Adm.produtoExclusao)
                      console.log(apiExcluir)

                        Adm.elementoTabela.innerHTML = ""

                        const listaAtualizada = await API.listarProdutosPorToken(API.infoUsuario.token)

                        listaAtualizada.forEach((elemento) => {
                            const trProduto = new Adm(elemento.imagem, elemento.categoria, 
                            elemento.nome, elemento.descricao, elemento.id, elemento.preco)
                            trProduto.criarTemplate(Adm.elementoTabela)
                        })

                      elementoPai.removeChild(elementoFilho)

                    }
                    else if( event.target.classList.value =="btn-divAdm-Deletar-Fechar" || event.target.classList.value =="btn-divAdm-Deletar-Fechar-2"){    

                        elementoPai.removeChild(elementoFilho)
                    }
            })
 
        }
    }                       

//-------------- Deletar Post --------

    static deletarPost(elementoPai){
        const divDeletarPost = document.createElement("div")
        divDeletarPost.classList.add("divAdm-DeletarPost")
        divDeletarPost.innerHTML = `
            <div class="divAdm-DeletarHeader">
                <span>Exclusão de produto</span>
                <button class="btn-divAdm-Deletar-Fechar-2">X</button>
            </div>
            <div class="divAdm-DeletarCorpo">
                <p class="divAdm-Deletar-texto">Tem certeza que deseja excluir este produto?</p>
            </div>
            <div class="divAdm-DeletarBtns">
                <button class="btn-divAdm-Deletar">Sim</button>
                <button class="btn-divAdm-Deletar-Fechar">Não</button>
            </div>
        `
        elementoPai.appendChild(divDeletarPost)
    }

//------------------------- Filtros -------------------

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
