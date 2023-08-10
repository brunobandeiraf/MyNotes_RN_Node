import { createContext, useContext, useState } from "react"

const AuthContext = createContext({})

import { api } from '../services/api'

function AuthProvider({ children }){
    
    const [data, setData] = useState({})

    async function signIn({ email, password }){
        
        try{
            const response = await api.post("/sessions", {email, password} )
            const { user, token } = response.data
            
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
    
    return(
        // Compartilhando a função signIn 
        // Compartilhando os dados do usuário autenticado
        <AuthContext.Provider value={{ signIn, user: data.user }}>
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