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

    const [links, setlinks] = useState([])
    const [newLink, setNewLink] = useState([]) // link do momento

    function handleAddLink(){
        // Pega tudo que tem antes e + o novo estado
        setlinks(prevState => [...prevState, newLink])
        // Reseta depois o link
        setNewLink("")
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
                                    onClick={ () => {} } // Função que não faz nada
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
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}