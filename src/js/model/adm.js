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
        this.trAdm.addEventListener("click", this) 
    }

    static produtoEdicao = {}

    criarTemplate(elementoPai){
        this.trAdm.innerHTML = `
                <td class="vitrineAdm-produtos-listar-td-1">
                    <img class="imgAdm" src="${this.imgUrl}" alt="">
                </td>
                <td class="vitrineAdm-produtos-listar-td-2">
                    <h2 class="h2Adm">${this.nomeProduto}</h2>
                </td>
                <td class="vitrineAdm-produtos-listar-td- 3"class="divCategoriasAdm">
                    <button class="divCategoriaAdmBtn">${this.categoria}</button>
                </td>
                <td class="vitrineAdm-produtos-listar-td-4">
                <p class="block-with-text">${this.descricao}</p>
                </td>
                <td class="vitrineAdm-produtos-listar-td-5"class="divAcaoAdm">
                   <button class="btnEditarAdm"><img class="imgAdmAcao" src="../img/lapisEditar.png" id="btnEditarAdm"></button>
                   <button class="btnExcluirAdm"><img class="imgAdmAcao" src="../img/lixoDelete.png" id="btnExcluirAdm"></button>
                </td>
        `
        elementoPai.appendChild(this.trAdm)
    }


    handleEvent(event){

        const modalEdicao = document.querySelector('.modalEdicao')

        if(event.target.id === 'btnEditarAdm'){

            const inputModEditNome  = document.querySelector('#inputModEditNome')
            const inputModEditDesc  = document.querySelector('#inputModEditDesc')
            const inputModEditValor = document.querySelector('#inputModEditValor')
            const inputModEditUrl   = document.querySelector('#inputModEditUrl')
            
            Adm.produtoEdicao = {...this}
            inputModEditNome.value  = Adm.produtoEdicao.nomeProduto
            inputModEditDesc.value  = Adm.produtoEdicao.descricao
            inputModEditValor.value = Adm.produtoEdicao.preco
            inputModEditUrl.value   = Adm.produtoEdicao.imgUrl


            console.log(Adm.produtoEdicao)


            modalEdicao.style.display = 'flex'
        }

        const modalExit = document.querySelector('.modalExit')
        modalExit.addEventListener('click', () =>{
            modalEdicao.style.display = 'none'
        })

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
