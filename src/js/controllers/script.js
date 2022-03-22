import { API } from "../model/api.js";


const testeUser = {
    email: 'teste77@email.com',
    password: 2022
}

const respostaAutenticaçao = await API.autenticarUsuario(testeUser)
console.log(respostaAutenticaçao)

const listaProdutosPubli = await API.listarProdutosPublico()
console.log(listaProdutosPubli)