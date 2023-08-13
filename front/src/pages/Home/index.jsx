import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home(){

    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([]) // Armazena array de notas listadas na home

    // useState([]) - Define um vetor de tags
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const navigate = useNavigate()

    function handleTagSelected(tagName){

        if(tagName === "all"){
            return setTagsSelected([])
        }

        // Verifica se já foi selecionado
        // Retorna true ou false
        // objetiva remover as clicadas duas vezes
        const alreadySelected = tagsSelected.includes(tagName)
        
        if(alreadySelected){ // Se tiver selecionado
            // Percorrer as tags e retornar somente as não selecionadas
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            // setTagsSelected recebe somente as selecionadas
            setTagsSelected(filteredTags)
        }else{ //senão
            setTagsSelected(prevState => [...prevState, tagName])
            // ... spread operation
            // Objetiva manter a seleção e + o novo selecionado
        }
        
    }

    function handleDetails(idNote){
        navigate(`/details/${idNote}`)
    }

    // Atualiza as Tags ao ser carregada a página
    useEffect(() => {
        // useEffect não aceita async
        async function fetchTags(){ // cria a função - async 
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags() // chama a função anterior
    }, [])
    
    useEffect(() =>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            console.log(response.data)
            setNotes(response.data)
        }
        fetchNotes()
    }, [tagsSelected, search])
    // Quando mudar os estados de [tagsSelected, search]
    // Vai acionar o useEffect


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
                        onClick={()=> handleTagSelected("all")}
                        isActive={tagsSelected.length === 0}
                        // Se tamanho do array for 0, retorna true
                    />
                </li>
                {
                    // Verifica se existe tags
                    // Se existe, percorrer com map
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                                // includes verifica no array se existe o parâmetro
                                // true se existir e false senão
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    // icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />  
                        ))
                    }
                        {/* < Note 
                            data={{ 
                                title: {},
                                tags: [
                                    { id: '1', name: 'react' }, 
                                    { id: '2', name: 'frontend' }   
                                ]
                            }}
                        /> */}
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