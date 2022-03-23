import { API } from "../model/api.js";
import { Adm } from "../model/adm.js";


const testeUser = {
    email: 'teste77@email.com',
    password: 2022
}

const respostaAutenticaçao = await API.autenticarUsuario(testeUser)
console.log(respostaAutenticaçao)

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