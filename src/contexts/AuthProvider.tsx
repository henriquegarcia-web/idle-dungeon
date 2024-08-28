import React, { createContext, useContext, useMemo, useState } from 'react'

interface IAuthContextData {
  userIsLoggedIn: boolean
  handleLogin: () => void
  handleLogout: () => void
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(true)

  // ========================================================================

  const handleLogin = () => {
    setUserIsLoggedIn(true)
  }

  const handleLogout = () => {
    setUserIsLoggedIn(false)
  }

  // ========================================================================

  const AuthContextData: IAuthContextData = useMemo(() => {
    return {
      userIsLoggedIn,
      handleLogin,
      handleLogout
    }
  }, [userIsLoggedIn, handleLogin, handleLogout])

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { AuthProvider, useAuth }
