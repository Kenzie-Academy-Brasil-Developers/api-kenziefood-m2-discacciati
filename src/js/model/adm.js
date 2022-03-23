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
                   <button class="btnEditarExcluirAdm">Ed</button>
                   <button class="btnEditarExcluirAdm">Ex</button>
                </td>
        `
        elementoPai.appendChild(this.trAdm)
    }

    handleEvent(event){
        console.log(this.idProduto)
    }
    
}
