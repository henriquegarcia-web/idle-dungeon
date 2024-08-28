import MainNavigator from '@navigation/MainNavigator'
import { AuthProvider } from '@contexts/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  )
}

export default App
