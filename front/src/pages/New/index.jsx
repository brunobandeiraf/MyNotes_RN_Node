import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonText } from "../../components/ButtonText" 
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function New(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // Array de links
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("") // link do momento

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("") 

    const navigate = useNavigate() // Responsável por direcionar o usuário

    function handleBack(){
        navigate(-1)
    }

    function handleAddLink(){
        // Pega tudo que tem antes e + o novo estado
        //  prevState acessa o conteúdo do estado anterior
        setLinks(prevState => [...prevState, newLink])
        // Reseta depois o link
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        // Removendo apenas o link do array do useState links
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        // Pega tudo que tem antes e + o novo estado
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){

        if(!title){
            return alert("Digite o título da nota.")
        }
        
        if(newLink){
            return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. /n Clique para adicionar ou deixe o campo vazio")
        }

        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. /n Clique para adicionar ou deixe o campo vazio")
        }

        await api.post("/notes", {
            title, 
            description, 
            tags,
            links
        })

        alert("Nota criada com sucesso!")
        navigate(-1) // Levar usuário para a Home
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText 
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </header>

                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            // links.map(() => ())
                            links.map((link, index) => ( // index é a chave padrão do map
                                <NoteItem 
                                    key={String(index)} // Obrigatório uma chave
                                    value={ link }
                                    // onClick={ () => {} } // Função que não faz nada
                                    onClick={() => handleRemoveLink(link)}
                                    // Passagem de parâmetro é obrigatório a Arrow Function
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link"
                            value={ newLink }
                            onChange={ e => setNewLink(e.target.value) }
                            onClick={ handleAddLink }
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <NoteItem 
                                isNew 
                                placeholder="Nova tag" 
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button 
                        title="Salvar" 
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}