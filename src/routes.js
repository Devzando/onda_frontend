import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Mycontext } from '../src/context/AuthContext'

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'

export default function Routes() {
    const { isLoggedIn } = useContext(Mycontext)

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                        <AppStack.Screen name="Home" component={Home} />
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