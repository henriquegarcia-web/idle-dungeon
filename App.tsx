import styled from 'styled-components/native'
import { Colors } from '@utils/styles/colors'

import MainNavigator from '@navigation/MainNavigator'
import { AuthProvider } from '@contexts/AuthProvider'

import LoadingScreen from '@screens/LoadingScreen'
import AppLoading from 'expo-app-loading'

export const AppView = styled.View`
  flex: 1;
  background-color: ${Colors.backgroundPrimary};
`

const App = () => {
  // if (!fontsLoaded) {
  //   // return <AppLoading />;
  //   return LoadingScreen
  // }

  return (
    <AppView>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </AppView>
  )
}

export default App
