import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home(){

    // useState([]) - Define um vetor de tags
    const [tags, setTags] = useState([])

    // Atualiza as Tags ao ser carregada a página
    useEffect(() => {
        // useEffect não aceita async
        async function fetchTags(){ // cria a função - async 
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags() // chama a função anterior
    }, [])
    
    return(
        <Container>
            <Brand>
                <h1>Your Notes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        isActive
                    />
                </li>
                {
                    // Verifica se existe tags
                    // Se existe, percorrer com map
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                            />
                        </li>
                    ))
                }
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

            {/*  
                - Componente Button está usando como referência um elemento Link
                - passa como parâmetro o destino
            */}
            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
}