export class Adm {
    constructor(imgUrl, categoria, nomeProduto, descricao, idProduto){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.descricao   = descricao
        this.idProduto   = idProduto

        this.trAdm  = document.createElement("tr")
        this.trAdm.classList.add("vitrineAdm-produtos-listar")
        this.trAdm.addEventListener("click", this) 
    }

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
                   <button class="btnEditarExcluirAdm"><img class="imgAdmAcao" src="../img/lapisEditar.png"></button>
                   <button class="btnEditarExcluirAdm"><img class="imgAdmAcao" src="../img/lixoDelete.png"></button>
                </td>
        `
        elementoPai.appendChild(this.trAdm)
    }

    handleEvent(event){
        console.log(this.idProduto)
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
