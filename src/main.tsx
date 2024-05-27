import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WatertankContextProvider } from './contexts/watertank_context.tsx'
import Global from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WatertankContextProvider>
      <Global />
      <App />
    </WatertankContextProvider>
  </React.StrictMode>,
)
