import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details(){
    
    return(
        <Container>
            <Header/>

            <h1>Olá</h1>
            <span>Bruno Bandeira</span>

            <Button title="Voltar"/>
        </Container>
    )
}