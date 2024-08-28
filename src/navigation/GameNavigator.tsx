import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from '@components/Header'

import { HomeView, InventoryView, ShopView } from '@views/index'

const Tab = createBottomTabNavigator()

export default function GameNavigator() {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2f95dc',
          tabBarInactiveTintColor: '#8e8e93'
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="Inventory"
          component={InventoryView}
          options={{ title: 'Inventory' }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopView}
          options={{ title: 'Shop' }}
        />
      </Tab.Navigator>
    </>
  )
}
