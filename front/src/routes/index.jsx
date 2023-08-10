import { BrowserRouter } from "react-router-dom";

import { useAuth } from '../hooks/auth'
 
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    // Acessando usuário do useAuth - usuário autenticado
    const { user } = useAuth()

    return(
        <BrowserRouter>
            { user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
               
        // Se tiver user - acessa AppRoutes - rotas autenticadas
        // Se não tiver, acessa AuthRoutes - rotas não autenticadas
            
    );
};