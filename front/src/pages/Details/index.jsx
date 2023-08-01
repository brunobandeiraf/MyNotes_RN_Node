import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details(){
    
    return(
        <Container>
            <h1>Olá</h1>
            <span>Bruno Bandeira</span>

            <Button title="Entrar" loading={true}/>
            <Button title="Cadastrar"/>
            <Button title="Voltar"/>
        </Container>
    )
}