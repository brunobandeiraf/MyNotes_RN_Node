import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout} from './styles'

export function Header(){

    // Acessando a função signOut do useAuth
    const { signOut } = useAuth()
    // Não foi preciso redirecionar porque na rota index já realiza o controle das sessions

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/brunobandeiraf.png"
                    alt="Foto de usuário"
                />
                <div>
                    <span>Bem-vindo!</span>
                    <strong>Bruno Bandeira</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}