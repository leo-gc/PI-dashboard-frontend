import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WatertankContextProvider } from './contexts/watertank_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WatertankContextProvider>
      <App />
    </WatertankContextProvider>
  </React.StrictMode>,
)
