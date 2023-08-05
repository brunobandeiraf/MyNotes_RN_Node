import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

// isNew para saber se é a propriedade de add um novo item
export function NoteItem({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}> 
            <input 
                type="text"
                value={value}
                readOnly={!isNew} //Se não é novo, pode bloquear
                {...rest}
            />

            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {/* Se for novo recebe FiPlus, se não o FiX */}
                {isNew ? <FiPlus/>  : <FiX/>}
            </button>
        </Container>
    )
}