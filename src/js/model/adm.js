import { API } from "./api.js"
export class Adm {
    constructor(imgUrl, categoria, nomeProduto, descricao, idProduto){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.descricao   = descricao
        this.idProduto   = idProduto

        this.trAdm  = document.createElement("tr")
        this.trAdm.classList.add("vitrineAdm-produtos-listar")
        this.trAdm.addEventListener("click", this) //Assim o js procura o handleEvent
    }

    static produtoExclusao

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

        if( event.target.id == "btnExcluirAdm"){
           const elementoPai = document.querySelector('#divsAdm')
           Adm.deletarPost(elementoPai) 
           const body = document.querySelector('body')
           const header = document.querySelector('.headerVitrine')
            body.style.background = 'rgba(0, 0, 0, 0.5)'
            header.style.background = 'rgba(0, 0, 0, 0)'
            Adm.produtoExclusao = this.idProduto
            
            const btnDeletarConfirm = document.querySelector('.divAdm-DeletarPost')
            btnDeletarConfirm.addEventListener('click', (event)=>{
                console.log(event.target.classList.value)
                    if( event.target.classList.value =="btn-divAdm-Deletar"){
                      const apiExcluir = API.excluirProduto(API.infoUsuario.token, Adm.produtoExclusao)
                    }
                    else if( event.target.classList.value =="btn-divAdm-Deletar-Fechar" || event.target.classList.value =="btn-divAdm-Deletar-Fechar-2"){
                        const elementoPai = document.querySelector('#divsAdm')
                        const elementoFilho = document.querySelector(".divAdm-DeletarPost")
                        body.style.background = 'none';
                        header.style.background = 'none';
                        elementoPai.removeChild(elementoFilho)
                    }
            })
 
        }
    }                       

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
