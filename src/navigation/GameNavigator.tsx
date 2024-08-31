import { Colors } from '@utils/styles/colors'

import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from '@components/Header'
import { gameScreens, IGameScreen } from 'src/data/gameScreens'

const Tab = createBottomTabNavigator()

const GameNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundSecondary }}>
      <Header />
      <Tab.Navigator
        initialRouteName="Inventory"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#22a21b',
          tabBarInactiveTintColor: '#8e8e93',
          tabBarStyle: {
            backgroundColor: `#17222d`,
            borderTopColor: 'black',
            height: 76,
            paddingTop: 10,
            paddingBottom: 10,
            borderWidth: 0
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          }
        }}
      >
        {gameScreens.map((menuOption: IGameScreen) => {
          return (
            <Tab.Screen
              key={menuOption.screenName}
              name={menuOption.screenName}
              component={menuOption.screenComponent}
              options={{
                title: menuOption.screenTitle,
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={menuOption.screenIcon}
                    style={{ width: size, height: size }}
                  />
                )
              }}
            />
          )
        })}
      </Tab.Navigator>
    </View>
  )
}

export default GameNavigator
