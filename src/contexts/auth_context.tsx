/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useState } from "react"

type AuthContextType = {
  login: (email: string, password: string) => void
  setPopUpLogged: (popUpLogged: boolean) => void
  logout: () => void
  popUpLogged: boolean
}

const defaultContext: AuthContextType = {
  login: async (_email: string, _password: string) => undefined,
  setPopUpLogged: (_popUpLogged: boolean) => undefined,
  logout: () => undefined,
  popUpLogged: true
}

export const AuthContext = createContext(defaultContext)

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [popUpLogged, setPopUpLogged] = useState(false)

  function login(email: string, password: string) {
    if (email.trim() === '' || password.trim() === '') {
      alert('Email or password is empty')
      return
    } else {
      localStorage.setItem('isLogged', 'true');
      setPopUpLogged(false)
    }
  }

  function logout() {
    localStorage.setItem('isLogged', 'false');
    setPopUpLogged(true)
  }

  return (
    <AuthContext.Provider value={{ login, popUpLogged, setPopUpLogged, logout }}>
      {children}
    </AuthContext.Provider>
  )
}