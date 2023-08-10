import { useState } from "react"
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Habilitar navegações entre as páginas do front
    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            alert("Preencha todos os campos!")
            return
        }
        // Enviando para a rota do back /users
        api.post("/users", { name, email, password })
        .then(()=>{
            alert("Usuário cadastrado com sucesso!")
            // Após cadastrar, direcionar para home
            navigate("/")
        })
        .catch(error =>{
            // Captura a mensagem de erro feita no backend - AppError
            if(error.response){
                alert(error.response.data.message)
            }else{
                // Se não existir mensagem personalizada do error
                alert("Não foi possível cadastrar!")
            }
        })

        //.then se der certo
        //.catch se der errado
    }

    return(
        <Container>

            < Background/>
            
            <Form>
                <h1>Your Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    // Acessar o valor digitado pelo usuário
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                {/* <Input 
                    placeholder="Confirmar senha"
                    type="password"
                    icon={FiLock}
                /> */}

                <Button title="Cadastrar" onClick={handleSignUp} /> 

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}