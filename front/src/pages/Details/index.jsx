import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
    
    return(
        <Container>
            <Header/>
            
            <main>
                <Content>
                    <ButtonText title="Excluir nota"/>
                    
                    <h1>Introdução ao React</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos omnis suscipit placeat et voluptatibus nostrum qui. 
                        Illum nobis aspernatur vitae, ducimus asperiores hic voluptates. 
                        Debitis iste ipsum tempore soluta excepturi?
                    </p>

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

                    

                    <Button title="Voltar"/>
                </Content>
            </main>
        </Container>
    )
}