import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WatertankContextProvider } from './contexts/watertank_context.tsx'
import Global from './styles/global.ts'
import { AuthContextProvider } from './contexts/auth_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WatertankContextProvider>
        <Global />
        <App />
      </WatertankContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
