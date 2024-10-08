import styled from 'styled-components/native'

import { useAuth } from '@contexts/AuthProvider'

export const SignInScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Button = styled.Button`
  font-size: 15px;
`

interface ISignInScreen {
  navigation: any
}

const SignInScreen = ({ navigation }: ISignInScreen) => {
  const { handleLogin } = useAuth()

  return (
    <SignInScreenWrapper>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </SignInScreenWrapper>
  )
}

export default SignInScreen
