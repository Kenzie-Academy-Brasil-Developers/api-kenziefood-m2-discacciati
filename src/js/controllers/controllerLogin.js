import { API } from "../model/api.js"

const formLogin       = document.querySelector(".formularioLogin")
const modalLogin      = document.querySelector(".modalErroLogin")
const botaoModalLogin = document.querySelector(".botaoModalErroLogin")

formLogin.addEventListener("submit", async function(e) {
    
    e.preventDefault()

    const infoInputLogin = {
        "email": formLogin.userLogin.value,
        "password": formLogin.senhaLogin.value
    }

    const loginUser = await API.autenticarUsuario(infoInputLogin)

    if(loginUser.statusText === "Not Found"){

        modalLogin.style.display = "flex"
        botaoModalLogin.addEventListener("click", ()=> {
            modalLogin.style.display = "none"
            location.reload()
        })

    }else{

        localStorage.setItem("tokenKF-G1Pedro", loginUser)
        location.assign("./adm.html")

    }

    console.log(loginUser)

})