import { Button, View, Text } from 'react-native'

import { useAuth } from '@contexts/AuthProvider'

interface ISignInScreen {
  navigation: any
}

const SignInScreen = ({ navigation }: ISignInScreen) => {
  const { handleLogin } = useAuth()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In Screen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  )
}

export default SignInScreen
