import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Mycontext } from '../src/context/AuthContext'

const AppStack = createStackNavigator();
const AppTab = createMaterialBottomTabNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'
import { color } from 'react-native-reanimated';

export default function Routes() {
    const { isLoggedIn } = useContext(Mycontext)

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {!isLoggedIn ? (
                        <AppStack.Screen name="Home" component={Tabs} />
                ) : (
                    <>
                        <AppStack.Screen name="Login" component={Login} />
                        <AppStack.Screen name="Cadastro" component={Cadastro} />
                    </>
                )}
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <AppTab.Navigator>
            <AppTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => {
                        <Feather name="home" color='#000000' size={15} />
                    }
                }}
            />
        </AppTab.Navigator>
    );
}