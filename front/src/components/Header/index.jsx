import { Container, Profile} from './styles'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/brunobandeiraf.png"
                    alt="Foto de usuário"
                />
                <div>
                    <span>Bem-vindo!</span>
                    <strong>Bruno Bandeira</strong>
                </div>
            </Profile>
        </Container>
    )
}