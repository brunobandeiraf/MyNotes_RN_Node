import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { useState } from 'react'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New(){
    // Array de links
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("") // link do momento

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("") 

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

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input 
                        placeholder="Título"
                    />

                    <Textarea 
                        placeholder="Observações"
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

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}