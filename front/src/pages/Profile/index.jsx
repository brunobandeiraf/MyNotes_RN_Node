import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
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
        `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceHolder

    // Começa com o avatar vindo da rota de autenticação
    const [avatar, setAvatar] = useState(avatarURL) 
    const [avatarFile, setAvatarFile] = useState(null) 

    async function handleUpdate(){
        // Objeto com os dados atualizado pelo usuário
        const user = {
            name, 
            email, 
            password: passwordNew,
            old_password: passwordOld
        }
        // Envia para o Hooks/Auth na função para buscar a rota de update
        await updateProfile({ user, avatarFile }) 
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
                <Link to="/">
                    <FiArrowLeft />
                </Link>
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