import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import FlashScreen from '../screens/FlashScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}

const FlashStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Flash"
        component={FlashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const sereenOption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    if (route.name === 'Home') {
      iconName = 'home'
    } else if (route.name === 'Flash') {
      iconName = 'check-square'
    }

    return <FontAwesome name={iconName} size={size} color={color} />
  },
})

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={sereenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Flash" component={FlashStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
