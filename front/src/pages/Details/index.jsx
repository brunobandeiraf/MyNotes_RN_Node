import { Container, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details(){
    
    return(
        <Container>
            <Header/>

            <Section title="Links úteis">
                <Links>
                    <li> <a href="#"> Link 1</a> </li>
                    <li> <a href="#"> Link 2</a> </li>
                </Links>
            </Section>

            <h1>Olá</h1>
            <span>Bruno Bandeira</span>

            <Button title="Voltar"/>
        </Container>
    )
}