import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles'
import ModalForm from '../../components/ModalForm'
import ModalInformation from '../../components/Modalinformation'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services/api';
import ModalSecurity from '../../components/Modalsecurity';

export default function Distribution() {

    const [button1, setButton1] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisibleinfo, setModalVisibleInfo] = useState(false)
    const [data, setData] = useState([1, 2, 3, 4])
    const [informatiomodal, setInformationModal] = useState({})

    async function listdist() {
        const token = await AsyncStorage.getItem('token')

        try {
            const response = await api.get('/listdistcreate', {
                headers: { 'x-access-token': token }
            })

            setData([...data, ...response.data.result])
        } catch (error) {
            console.log(error)
        }
    }

    function getInformatiomodal(name, description, date, time, location, vacancies) {
        setInformationModal({ name, description, date, time, location, vacancies })
    }
    useEffect(() => {
        let mounted = true; // utilizo isso para previnir o erro de peformace
        if (mounted) {
            //listdist()
        }

        return () => mounted = false
    }, [])
    return (
        <View style={styles.container_geral}>
            {modalVisibleinfo ?
                <View style={styles.cabeçalho}>
                    <ModalInformation
                        listinformation={informatiomodal}
                        changeVisible={() => setModalVisibleInfo(false)}
                    />
                </View>
                :
                <>
                    <View style={styles.cabeçalho}>
                        <View style={styles.texts}>
                            <Text style={styles.text}>Distribuições</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.botões}>
                            <TouchableOpacity style={styles.botão} onPress={() => setButton1(true)}>
                                <Text style={styles.text_criadas}>Criadas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botão2} onPress={() => setButton1(false)}>
                                <Text style={styles.text_cadastradas}>Cadastradas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {button1 ? (
                        <>

                            {modalVisible ? <ModalForm changevisible={() => setModalVisible(false)} /> :
                                <>
                                    <FlatList
                                        data={data}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={styles.container_list}
                                                onPress={() => {
                                                setModalVisibleInfo(true)
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
                                                        source={{   }} 
                                                    />
                                                </View>

                                                <View style={styles.texts_list}>
                                                    <Text style={styles.text_list1}>{/*item.name*/}</Text>
                                                    <Text style={styles.text_list2}>TÉRMINO: {/*item.date*/}</Text>
                                                    <Text style={styles.text_list2}>VAGAS: 0/{/*item.vacancies*/}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                        ListEmptyComponent={() => (

                                            <View style={styles.corpo}>
                                                <Image
                                                    style={styles.imagem}
                                                    source={require('../../assets/nada_aqui.png')}
                                                />

                                                <View style={styles.text_corpo}>
                                                    <Text style={styles.text_corpo1}>Ah não!</Text>
                                                    <Text style={styles.text_corpo2}>Ainda não há nada</Text>
                                                    <Text style={styles.text_corpo2}>por aqui.</Text>
                                                </View>
                                            </View>
                                        )}
                                        ListFooterComponent={() => (
                                            <>
                                                <View style={styles.icons}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setModalVisible(true)
                                                        }}
                                                    >
                                                        <Ionicons name="add-circle" size={60} color="#983264" />
                                                    </TouchableOpacity>
                                                    {data.length == 0 ? null :
                                                        <TouchableOpacity style={styles.lixeira}>
                                                            <FontAwesome5 name="trash" size={25} color="#FFFFFF" />
                                                        </TouchableOpacity>
                                                    }

                                                </View>

                                            </>
                                        )}
                                        ListFooterComponentStyle={{}}
                                    />

                                </>
                            }
                        </>
                    ) : (
                        <View>
                            <Text>teste</Text>
                        </View>)}
                </>}
        </View>
    )
}