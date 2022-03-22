import { API } from "../model/api.js";

const formCadastro = document.querySelector(".formularioCadastro")
//chamar div

formCadastro.addEventListener("submit", async function (e){
    
    e.preventDefault()

    const infoInputCadastro = {
        "name": formCadastro.nomeCadastro.value,
        "email": formCadastro.emailCadastro.value,
        "password": formCadastro.senhaCadastro.value
    }

    const criarUser = await API.criarUsuario(infoInputCadastro)
    
    /*if(criarUser.status === "Error"){
        modal de erro
        botao de fechar
    }else{
        modal de confirmacao
        botao de fechar
    }*/
    
    //location.assign("./src/paginas/login.html")

    console.log(criarUser)

})