import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext({})

import { api } from '../services/api'

function AuthProvider({ children }){
    // children pega o componente filho do AuthProvider
    
    const [data, setData] = useState({})

    async function signIn({ email, password }){
        
        try{
            const response = await api.post("/sessions", {email, password} )
            const { user, token } = response.data
            
            // Inserindo o estado de logado no localStorage
            localStorage.setItem("@myNotes:user", JSON.stringify(user))
            localStorage.setItem("@myNotes:token", token)

            // Inserindo o token do tipo Bearer no cabeçalho de todas as requisições realizadas
            api.defaults.headers.authorization = `Bearer ${token}`

            // Armazenando os dados no useState
            setData({ user, token })

        }catch(error){
            if(error.response){
                // Resposta do backend
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut(){
        console.log("entrou aqui no signout")
        // Remove do localStorage
        localStorage.removeItem("@myNotes:token")
        localStorage.removeItem("@myNotes:user")

        // Altera o estado do useState para vazio
        setData({})
    }
    
    // useEffect(( ) => { 
    //    Executado toda vez que for chamado
    // }, [ 
    //    Estado que irá mudar e recarregar o useEffect
    //    Vazio - carregado apenas uma única vez após a renderização 
    // ])

    // Recuperando os dados no localStorage do usuário logado
    useEffect(() => {
        const token = localStorage.getItem("@myNotes:token")
        const user = localStorage.getItem("@myNotes:user")

        // Se existe token e existe user
        if(token && user){
            // Inserindo o token do tipo Bearer no cabeçalho de todas as requisições realizadas
            api.defaults.headers.authorization = `Bearer ${token}`

            // useState setData
            setData({
                token, 
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        // Compartilhando a função signIn 
        // Compartilhando os dados do usuário autenticado
        <AuthContext.Provider value={{ 
                signIn, 
                signOut,
                user: data.user,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

// É um hook
function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }