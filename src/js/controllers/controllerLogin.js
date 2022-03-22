const formLogin = document.querySelector(".formularioLogin")

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const infoInput = {
        "email": formLogin.userLogin.value,
        "password": formLogin.senhaLogin.value
    }

    fetch("https://kenzie-food-api.herokuapp.com/auth/login", 
    {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(infoInput)
    })
    .then((response) => response.json())
    .then((res) => {
        location.assign("./../../../index.html")
        console.log(res)
    })
})