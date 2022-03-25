export class API{

    static ROTA = "https://kenzie-food-api.herokuapp.com"

    static infoUsuario = {
        token: localStorage.getItem('tokenKF-G1Pedro'),
        informaçoes: {}
    }

    static async criarUsuario(dados){

        const response = await fetch(`${API.ROTA}/auth/register`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
                        },
            "body": JSON.stringify(dados)
        })    

        return response
    }

    static async autenticarUsuario(dados){

        const response = await fetch(`${API.ROTA}/auth/login`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
                        },
            "body": JSON.stringify(dados)
        })   
        
        const resposta = await response.json()

        if(response.status == 200){
             localStorage.setItem('tokenKF-G1Pedro', resposta)
        }
        

        return response
    }

    static async listarProdutosPublico(){

        const response = await fetch(`${API.ROTA}/products`)

        return response.json()
    }

    static async listarProdutosPorToken(token){

        const response = await fetch(`${API.ROTA}/my/products`, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token}`
                        },            
        })            

        return response.json()
    }

    static async criarProduto(token, dadosProduto){

        const response = await fetch(`${API.ROTA}/my/products`, {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${token}`
                        },
            "body": JSON.stringify(dadosProduto)
        })    

        return response.json()
    }

    static async atualizarProduto(token, dadosProduto, idProduto){

        const response = await fetch(`${API.ROTA}/my/products/${idProduto}`, {
            "method": "PATCH",
            "headers": {
                "Authorization": `Bearer ${token}`
                        },
            "body": JSON.stringify(dadosProduto)
        })    

        return response.json()
    }

    static async excluirProduto(token, idProduto){

        const response = await fetch(`${API.ROTA}/my/products/${idProduto}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
                        },
        })    

        return response.json()
    }

    static async listarProdutosNoCarrinho(token){

        const response = await fetch(`${API.ROTA}/cart`, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token}`
                        },
        })    

        return response.json()
    }

    static async adicionarProdutoAoCarrinho(token, idProduto, quantidade){

        if(quantidade){

            const response = await fetch(`${API.ROTA}/cart`, {
                "method": "POST",
                "headers": {
                    "Authorization": `Bearer ${token}`
                            },
                "body":JSON.stringify({
                    product_id: idProduto,
                    quantity: quantidade
                })
                     
            })    
    
            return response.json()
        }
        else{

            const response = await fetch(`${API.ROTA}/cart`, {
                "method": "POST",
                "headers": {
                    "Authorization": `Bearer ${token}`
                            },
                "body":JSON.stringify({
                    product_id: idProduto                    
                })
                     
            })    
    
            return response.json()
        }

    }

    static async excluirProdutoDoCarrinho(token, idProduto){

        const response = await fetch(`${API.ROTA}/cart/remove/${idProduto}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
                        },
        })    

        return response.json()
    }
}