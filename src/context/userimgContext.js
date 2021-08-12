import React, { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Userimgcontext = createContext()

function UserImgProvider({ children }) {
    const [reload, setReload] = useState(false)

    async function updateuserimg(idimg){
        const id = await AsyncStorage.getItem('iduser')
        try {
            await api.put(`/updateimgprofile?id_user=${id}&id_img=${idimg}`)
            setReload(true)
        } catch (error) {
            setReload(false)
            console.log(error)
        }
    }

    return (
        <Userimgcontext.Provider value={{updateuserimg, reload}}>
            {children}
        </Userimgcontext.Provider>
    )
}

export { UserImgProvider, Userimgcontext }