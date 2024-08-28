import { Button, View, Text } from 'react-native'

interface ISignUpScreen {
  navigation: any
}

const SignUpScreen = ({ navigation }: ISignUpScreen) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up Screen</Text>
      <Button title="Go to Sign In" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default SignUpScreen
