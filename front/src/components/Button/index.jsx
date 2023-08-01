import { Container } from './styles'

// ...res (rest operation) significa que qualquer propriedade
// que não foi informado, mas que foi passado, vai existir. 
// em resumo, pega todas as propriedades do componente
export function Button({ title, loading = false, ...rest}){
    return(
        <Container 
            type="button"
            disable={loading}
            {...rest}
        >
            {/* Se for verdadeiro, aparece a mensagem, se não, o title */}
            { loading ? 'Carregando...' : title}
        </Container>
    )
}