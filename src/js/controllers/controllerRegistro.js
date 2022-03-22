import { API } from "../model/api.js";

const formCadastro                  = document.querySelector(".formularioCadastro")
const modalErroCadastro             = document.querySelector(".modalErroCadastro")
const botaoModalErroCadastro        = document.querySelector(".botaoModalErroCadastro")
const modalConfirmacaoCadastro      = document.querySelector(".modalConfirmacaoCadastro")
const botaoModalConfirmacaoCadastro = document.querySelector(".botaoModalConfirmacaoCadastro")

formCadastro.addEventListener("submit", async function (e){
    
    e.preventDefault()

    const infoInputCadastro = {
        "name": formCadastro.nomeCadastro.value,
        "email": formCadastro.emailCadastro.value,
        "password": formCadastro.senhaCadastro.value
    }
    
    const criarUser = await API.criarUsuario(infoInputCadastro)
    
    if(criarUser.status === "Error"){
        
        modalErroCadastro.style.display = "flex"

        botaoModalErroCadastro.addEventListener("click", () => {
            modalErroCadastro.style.display = "none"
        })

    }else{

        modalConfirmacaoCadastro.style.display = "flex"

        botaoModalConfirmacaoCadastro.addEventListener("click", () => {
            modalConfirmacaoCadastro.style.display = "none"
            location.assign ("login.html")
        })

    }
    
    console.log(criarUser)

})