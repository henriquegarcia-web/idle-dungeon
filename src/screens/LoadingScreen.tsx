import styled from 'styled-components/native'

import { useAuth } from '@contexts/AuthProvider'

const LoadingScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Button = styled.Button`
  font-size: 15px;
`

interface ILoadingScreen {
  navigation: any
}

const LoadingScreen = ({ navigation }: ILoadingScreen) => {
  const { handleLogin } = useAuth()

  return (
    <LoadingScreenWrapper>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </LoadingScreenWrapper>
  )
}

export default LoadingScreen
