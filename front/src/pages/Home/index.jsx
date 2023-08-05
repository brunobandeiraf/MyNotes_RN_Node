import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Your Notes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    < Note data={{ 
                        title: 'React', 
                        tags: [
                            { id: '1', name: 'react' }, 
                            { id: '2', name: 'frontend' }   
                        ]
                    }}/>
                    < Note data={{ 
                        title: 'React Native', 
                        tags: [
                           
                            { id: '1', name: 'Nodejs' }, 
                            { id: '2', name: 'backend' }
                            
                        ]
                    }}/>
                     < Note data={{ 
                        title: 'NodeJS', 
                        tags: [
                           
                            { id: '1', name: 'Nodejs' }, 
                            { id: '2', name: 'backend' },
                            { id: '3', name: 'frontend' }
                            
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote>
                {/* <FiPlus/> */}
                Criar nota
            </NewNote>
        </Container>
    )
}