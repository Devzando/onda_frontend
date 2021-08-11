import React, { useContext } from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { Mycontext } from '../src/context/AuthContext'

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator()

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'
import Distribution from './pages/Distribution'
import Tips from './pages/Tips'
import Perfil from './pages/Perfil'

export default function Routes() {
    const { isLoggedIn } = useContext(Mycontext)

    return (
        <NavigationContainer>
            {!isLoggedIn ? (
                <Tab.Navigator
                    tabBarOptions={{ showLabel: false }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let iconColor;

                            if (route.name === 'Home') {
                                iconName = 'md-home'
                                focused ? iconColor = '#B46F91' : iconColor = 'black'
                            } else if (route.name === 'Distribution') {
                                iconName = 'md-basket'
                                focused ? iconColor = '#B46F91' : iconColor = 'black'
                            } else if (route.name === 'Tips') {
                                iconName = 'md-bulb'
                                focused ? iconColor = '#B46F91' : iconColor = 'black'
                            } else if (route.name === 'Perfil') {
                                iconName = 'md-person'
                                focused ? iconColor = '#B46F91' : iconColor = 'black'
                            }
                            return (
                                <Ionicons name={iconName} size={30} color={iconColor} />
                            )
                        }
                    })}
                >
                    <Tab.Screen name='Home' component={Home} />
                    <Tab.Screen name='Distribution' component={Distribution} />
                    <Tab.Screen name='Tips' component={Tips} />
                    <Tab.Screen name='Perfil' component={Perfil} />
                </Tab.Navigator>
            ) : (
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="Login" component={Login} />
                    <AppStack.Screen name="Cadastro" component={Cadastro} />
                </AppStack.Navigator>
            )}
        </NavigationContainer>
    );
}

