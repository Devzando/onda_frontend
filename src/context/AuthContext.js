import React, { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import { Alert, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Mycontext = createContext()

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrennLogin, setScreenLogin ] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function verifyToken(){
            const token = await AsyncStorage.getItem('token')
            if(token) setIsLoggedIn(true)
            setLoading(false)
        }
        verifyToken()

    }, [])


    async function submitRegister(name, email, password) {
        const data = { name, email, password }

        try {
             await api.post('/', data)
             setScreenLogin(true)
             console.log(scrennLogin)

        } catch (error) {
            console.log(error)
            Alert.alert('Que pena, ocorreu algum erro, tente novamente.');
        }
    }

    async function submitLogin(email, password){
        const data = { email, password }

        try {
            const response = await api.post('/login', data)
            console.log(response.data.id)

            await AsyncStorage.setItem('token', response.data.token)
            await AsyncStorage.setItem('iduser', String(response.data.id))

            setIsLoggedIn(true)

        } catch (error) {
             await AsyncStorage.removeItem('token')
             Alert.alert('Que pena, ocorreu algum erro, tente novamente.');
        }
    }

    if(loading){ 
        return (<> 
        </>
    )} 

    return (
        <Mycontext.Provider value={{ submitRegister, submitLogin, isLoggedIn, setIsLoggedIn, scrennLogin, setScreenLogin }}>
            {children}
        </Mycontext.Provider>
    )
}

export { Mycontext, AuthProvider, }