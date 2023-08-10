import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

import { Routes } from './routes'

// Context para controlar rotas de autenticação
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {/* AuthProvider vai definir a permissão das rotas */}
            <AuthProvider>
                <Routes />
            </AuthProvider>    
          
        </ThemeProvider>
    </React.StrictMode>
)