import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import ModalInformation from '../../components/Modalinformation'
import { api } from '../../services/api'

export default function Home() {
    const [Data, setData] = useState([])
    const [modalvisible, setModalVisible] = useState(false)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [informatiomodal, setInformationModal] = useState({})


    async function listdistribution(){
        if(total && page > total) return
        
        const token = await AsyncStorage.getItem('token')

        try {
            const response = await api.get(`/listdistglobal?page=${page}`, {
                headers: { 'x-access-token': token}
            })
            setTotal(Number(response.data.numberPage))
            setData([...Data, ...response.data.result])

        } catch (error) {
            console.log(error)
        }

        setPage(page + 1)
        
    }
    function getInformatiomodal(name, description, date, time, location, vacancies){
        setInformationModal({name, description, date, time, location, vacancies})
    }

    useEffect(() => {
        listdistribution()
    }, [])

    return (

        <View style={styles.container_geral}>
            <View style={styles.container_icon}>
                <TouchableOpacity style={styles.view_log_out}>
                    <SimpleLineIcons style={styles.log_out} name='logout' size={30} />
                </TouchableOpacity>
            </View>

            <View style={styles.cabeçalho}>
                <View style={styles.texts}>
                    <Text style={styles.text}>Bem Vindo(a) ao</Text>
                    <Text style={styles.text}>Bian</Text>
                </View>

                <View style={styles.view_imagem}>
                    <Image style={styles.imagem_cabeçalho} source={require('../../assets/mulherzinha.png')} />
                </View>
            </View>

            <View style={styles.view_distribuição}>
                <Text style={styles.text_distribuição}>Distribuições disponiveis:</Text>
            </View>

            {modalvisible && <ModalInformation 
                listinformation={informatiomodal} 
                changeVisible={() => setModalVisible(false)} 
            />} 
            <FlatList
                data={Data}
                keyExtractor={(item) => String(item.id)}
                onEndReachedThreshold={0.1}
                onEndReached={listdistribution}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity
                            style={styles.container_list}
                            onPress={() => {
                                setModalVisible(true)
                                getInformatiomodal(
                                    item.name, 
                                    item.description, 
                                    item.date, 
                                    item.time, 
                                    item.location, 
                                    item.vacancies
                                    )
                            }}
                        >
                            <View>
                            <Image 
                                style={{width: 100, height: 100, marginRight: 30 }} 
                                source={{uri: item.imgurl}} 
                            />
                            </View>

                            <View style={styles.texts_list}>
                                <Text style={styles.text_list1}>{item.name}</Text>
                                <Text style={styles.text_list2}>TÉRMINO: {item.date}</Text>
                                <Text style={styles.text_list2}>VAGAS: {item.vacancies}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}
