export class Adm {
    constructor(imgUrl, categoria, nomeProduto, descricao, idProduto){
        this.imgUrl      = imgUrl
        this.categoria   = categoria
        this.nomeProduto = nomeProduto
        this.descricao   = descricao
        this.idProduto   = idProduto

        this.liAdm  = document.createElement("li")
        this.liAdm.classList.add("vitrineAdm-produtos-listar")
        this.liAdm.addEventListener("click", this) 
    }

    criarTemplate(elementoPai){
        this.liAdm.innerHTML = `
                <img class="imgAdm" src="${this.imgUrl}" alt="">
                <h2 class="h2Adm">${this.nomeProduto}</h2>
                <div class="divCategoriasAdm">
                    <button class="divCategoriaAdmBtn">${this.categoria}</button>
                </div>
                <p class="descricaoAdm">${this.descricao}</p>
                <div class="divAcaoAdm">
                   <button class="btnEditarExcluirAdm"><img class="imgAdm" src="./src/img/" alt=""></button>
                   <button class="btnEditarExcluirAdm"><img class="imgAdm" src="./src/img/" alt=""></button>
                </div>
        `
        elementoPai.appendChild(this.liAdm)
    }

    handleEvent(event){
        console.log(this.idProduto)
    }
    
}