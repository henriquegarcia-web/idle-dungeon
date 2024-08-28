import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAuth } from '@contexts/AuthProvider'

import AuthNavigator from './AuthNavigator'
import GameNavigator from './GameNavigator'

const Stack = createNativeStackNavigator()

export default function MainNavigator() {
  const { userIsLoggedIn } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        {userIsLoggedIn ? (
          <Stack.Screen
            name="Game"
            component={GameNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
