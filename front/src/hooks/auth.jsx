import { createContext, useContext } from "react"

const AuthContext = createContext({})

function AuthProvider({ children }){
    return(
        <AuthContext.Provider value={{ email: "bruno@exemplo.com" }}>
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