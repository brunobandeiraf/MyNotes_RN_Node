import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { ButtonText } from "../../components/ButtonText"
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles'


export function Profile(){
    // Usuário do contexto de autenticação
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarURL = user.avatar ? 
        `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    // Começa com o avatar vindo da rota de autenticação
    const [avatar, setAvatar] = useState(avatarURL) 
    const [avatarFile, setAvatarFile] = useState(null) 

    const navigate = useNavigate() // Responsável por direcionar o usuário

    function handleBack(){
        navigate(-1)
    }

    async function handleUpdate(){
        // Objeto com os dados atualizado pelo usuário
        const updated = {
            name, 
            email, 
            password: passwordNew,
            old_password: passwordOld
        }
        
        // assign updated e insere em user. 
        // Verifica e os atributos que não possuem em updated, são atribuidos de user
        // Em resumo: avatar não está sendo passado no objeto anterior. Mantém o avatar
        const userUpdated = Object.assign(user, updated)

        // Envia para o Hooks/Auth na função para buscar a rota de update
        await updateProfile({ user: userUpdated, avatarFile }) 
    }

    function handleChangeAvatar(event){
        // Seleciona somente um arquivo
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <FiArrowLeft size={24}/>
                </button>
            </header>

            <Form>

                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário" 
                    />
                    <label htmlFor="avatar">
                        <FiCamera/>
                   
                        <input 
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        /> 
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name} // Mostrar os dados do user context
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={ handleUpdate } />
            </Form>

        </Container>
    )
}