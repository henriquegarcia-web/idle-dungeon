import MainNavigator from '@navigation/MainNavigator'
import { AuthProvider } from '@contexts/AuthProvider'

import LoadingScreen from '@screens/LoadingScreen'
import AppLoading from 'expo-app-loading'

const App = () => {
  // if (!fontsLoaded) {
  //   // return <AppLoading />;
  //   return LoadingScreen
  // }

  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  )
}

export default App
