import { Container } from './styles'

// icon: Icon - renomeia o icon para Icon
export function Input({ icon: Icon, ...rest }){
    return(
        <Container>
            { Icon && <Icon size={20}/> }
            {/* &&  - só mostra, se existir (for passado)*/}
            <input {...rest} />      
        </Container>
    )
}