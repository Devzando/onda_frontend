import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'
import { api } from '../../services/api'
import ModalImgsProfile from '../../components/Modalimgsprofile'

export default function Perfil() {
    const [imgsprofile, setImgsProfile] = useState([])
    const [data, setData] = useState({})
    const [visisblemodal, setVisibleModal] = useState(false)

    async function listUser() {
        const token = await AsyncStorage.getItem('token')

        try {
            const response = await api.get('/listusers', {
                headers: { 'x-access-token': token }
            })
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function listimgsprofile() {

        try {
            const response = await api.get('listimgprofile')
            setImgsProfile(response.data)
            setVisibleModal(!visisblemodal)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listUser()
    }, [data])

    return (

        <View style={styles.container_geral}>
              
            <View style={styles.cabeçalho}>
                <View style={styles.perfil}>
                    <View style={styles.container_img}>
                        <Image style={styles.imagem_perfil} source={{uri: data.imgurl}} />
                    </View>

                    <TouchableOpacity
                        style={styles.edit}
                        onPress={listimgsprofile}
                    >
                        <MaterialCommunityIcons name="pencil" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.usuario_text}>
                    <Text style={styles.text1}>{data.name}</Text>
                    <Text style={styles.text2}>{data.email}</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.container_button}>
                    <LinearGradient style={styles.containers} colors={['#FFFFFF', '#DCDCDC']}>
                        <View style={styles.text_button}>
                            <Text style={styles.text_container}>
                                DISTRIBUIÇÕES CADASTRADAS              05
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.container_button}>
                    <LinearGradient style={styles.containers} colors={['#FFFFFF', '#DCDCDC']}>
                        <View style={styles.text_button}>
                            <Text style={styles.text_container}>
                                DISTRIBUIÇÕES CRIADAS                           03
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {visisblemodal && <ModalImgsProfile 
                imgs={imgsprofile} 
                visible={() => setVisibleModal(false)}
                />
            }
        </View>
    )
}