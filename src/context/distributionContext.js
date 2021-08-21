import React, { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DistributionContext = createContext()

function DistributionProvider({ children }){

    async function submit(name, description, location, vacancies, imgid, date){
        const data = {name, description, location, vacancies, imgid, date}
        const token = await AsyncStorage.getItem('token')
        
        try {
            await api.post('/createdist', data, {
                headers: {'x-access-token': token}
            })

        } catch (error) {
            console.log(error)
        }
      
    }

    return(
        <DistributionContext.Provider value={{submit}}>
            { children }
        </DistributionContext.Provider>
    )
}

export { DistributionContext, DistributionProvider }