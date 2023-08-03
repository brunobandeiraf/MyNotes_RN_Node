import { Container, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
    
    return(
        <Container>
            <Header/>
            
            <ButtonText title="Excluir nota"/>
            
            <Section title="Links úteis">
                <Links>
                    <li> <a href="#"> Link 1</a> </li>
                    <li> <a href="#"> Link 2</a> </li>
                </Links>
            </Section>

            <Section title="Marcadores">
                <Tag title="express"/>
                <Tag title="nodejs"/>
            </Section> 

            <h1>Olá</h1>
            <span>Bruno Bandeira</span>

            <Button title="Voltar"/>
        </Container>
    )
}