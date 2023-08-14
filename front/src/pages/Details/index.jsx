import { Container, Links, Content } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
// useParams busca os parâmetros passado pela rota
import { useState, useEffect } from 'react'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
    
    const [data, setData] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1) 
        // Envia usuário para o Home - rota anterior
        // Não empilha novas rotas de navegação
    }

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover a nota?")

        if(confirm){
            await api.delete(`/notes/${params.id}`)
            navigate(-1)
        }
    }


    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
            //params.id é passado pelo parâmetro e capturado pelo useParams
        }
        fetchNotes()
    }, [])

    return(
        <Container>
            <Header/>
            {
                data && 
                // Se tem conteúdo mostra o data, senão tem, não mostra
                <main>
                 <Content>
                     <ButtonText 
                        title="Excluir nota"
                        onClick={handleRemove}
                    />
                     
                     <h1>
                        {data.title}
                     </h1>
                     <p>
                        {data.description}
                     </p>

                    {
                        data.links && // Só mostra se tiver
                        <Section title="Links úteis">
                            <Links>
                                {
                                    data.links.map(link => (
                                        <li key={String(link.id)}> 
                                            <a href={link.url} target="_black"> 
                                                {link.url}
                                            </a> 
                                        </li>
                                    ))
                                } 
                            </Links>
                        </Section>
                    }

                    {
                        data.tags && // Só mostra se tiver
                        <Section title="Marcadores">
                            {
                                data.tags.map(tag => (
                                    <Tag
                                        key={String(tag.id)} 
                                        title={tag.name}
                                    />
                                ))
                            }
                        </Section> 
                    }
                     
 
                    <Button 
                        title="Voltar"
                        onClick={handleBack}
                    />
                 </Content>
             </main>
            }
           
        </Container>
    )
}