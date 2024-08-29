import styled from 'styled-components/native'
import { Colors } from '@utils/styles/colors'

import { Image, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import inventoryIcon from 'assets/icons/inventory.png'
import dungeonIcon from 'assets/icons/dungeon.png'
import shopIcon from 'assets/icons/shop.png'
import servicesIcon from 'assets/icons/services.png'
import mapIcon from 'assets/icons/map.png'
import rankingIcon from 'assets/icons/ranking.png'

import Header from '@components/Header'
import { DungeonView, InventoryView, ShopView } from '@views/index'

export const GameNavigatorScreen = styled.View`
  flex: 1;
  background-color: ${Colors.backgroundSecondary};
`

const Tab = createBottomTabNavigator()

const GameNavigator = () => {
  return (
    <GameNavigatorScreen>
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
            fontSize: 14,
            fontWeight: 'bold'
          }
        }}
      >
        <Tab.Screen
          name="Services"
          component={InventoryView}
          options={{
            title: 'Serviços',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={servicesIcon}
                style={{ width: size, height: size }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Inventory"
          component={InventoryView}
          options={{
            title: 'Personagem',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={inventoryIcon}
                style={{ width: size, height: size }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Dungeon"
          component={DungeonView}
          options={{
            title: 'Dungeon',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={dungeonIcon}
                style={{ width: size, height: size }}
              />
            )
          }}
        />
        <Tab.Screen
          name="Map"
          component={ShopView}
          options={{
            title: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <Image source={mapIcon} style={{ width: size, height: size }} />
            )
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopView}
          options={{
            title: 'Loja',
            tabBarIcon: ({ color, size }) => (
              <Image source={shopIcon} style={{ width: size, height: size }} />
            )
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={ShopView}
          options={{
            title: 'Ranking',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={rankingIcon}
                style={{ width: size, height: size }}
              />
            )
          }}
        />
      </Tab.Navigator>
    </GameNavigatorScreen>
  )
}

export default GameNavigator
