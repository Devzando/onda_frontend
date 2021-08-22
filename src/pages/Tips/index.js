import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './styles'
import { api } from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Tips(){
    
    const [description, setDescription] = useState('')
    const [imgurl, setImgurl] = useState('')


    async function getfoods(){
        const token = await AsyncStorage.getItem('token')

        try {
            const response = await api.get('/listfoods', {
                headers: {'x-access-token': token}
            })

            setDescription(response.data.description)
            setImgurl(response.data.imgurl)

        } catch (error) {
            console.log(error)
        }
        console.log(description)
    }

    useEffect(() => {
        let mounted = true; // utilizo isso para previnir o erro de peformace
        if(mounted){
            getfoods()
        }

        return () => mounted = false

    }, [])

    return(
        <View style={styles.container_geral}>
            <View style={styles.cabeçalho}>
                <View style={styles.texts}>
                    <Text style={styles.text}>Aproveitamento integral</Text>
                    <Text style={styles.text}>dos alimentos</Text>
                </View>
            </View>

            <View style={styles.corpo}>
                <View style={styles.texts_corpo}>
                    <Text style={styles.text_corpo}>{description}</Text>       
                </View>

                <Image style={styles.imagem} source={{uri: imgurl}} />

            </View>

            <View style={styles.container_button}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={getfoods}
                >
                    <Text style={styles.text_button}>Próxima dica</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}