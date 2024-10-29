import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Search from '../screens/Search'
import Settings from '../screens/Settings'
import Favourites from '../screens/Favourites'
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home',
                            color = focused ? "#93c7a1" : "white"
                    } else if (route.name === 'Search') {
                        iconName = 'search',
                            color = focused ? "#93c7a1" : "white"
                    } else if (route.name === 'Favourites') {
                        iconName = 'heart',
                            color = focused ? "#93c7a1" : "white"
                    } else if (route.name === 'Settings') {
                        iconName = 'settings',
                            color = focused ? "#93c7a1" : "white"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#1a1919',
                },
                tabBarHideOnKeyboard: true
            })}

        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Favourites" component={Favourites} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default App