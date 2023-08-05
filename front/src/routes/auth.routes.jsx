import { Routes, Route } from 'react-router-dom';

import { SignUp} from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';

// Routas para usuário não logado
export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/register' element={<SignUp/>} />
        </Routes>
    );
}