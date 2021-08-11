import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import styles from './styles'
import ModalInformation from '../../components/Modalinformation'

export default function Home() {
    const [Data, setData] = useState([1])
    const [modalvisible, setModalVisible] = useState(false)

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
                        <Text style={styles.text}>nomedoapp</Text>
                    </View>

                    <View style={styles.view_imagem}>
                        <Image style={styles.imagem_cabeçalho} source={require('../../assets/mulherzinha.png')} />
                    </View>
                </View>

                <View style={styles.view_distribuição}>
                    <Text style={styles.text_distribuição}>Distribuições disponiveis:</Text>
                </View>

            <FlatList
                data={Data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => {

                    if(modalvisible) return <ModalInformation changeVisible={() => setModalVisible(false)} />
                    return (
                        <TouchableOpacity 
                            style={styles.container_list}
                            onPress={() => setModalVisible(true)}
                        >
                            <View>
                                <Image style={styles.img_list} source={require('../../assets/sacolas.png')} />
                            </View>

                            <View style={styles.texts_list}>
                                <Text style={styles.text_list1}>1234567891231213215</Text>
                                <Text style={styles.text_list2}>1234567891234567891234567894569698</Text>
                                <Text style={styles.text_list2}>1234567891234567891234567894569878</Text>
                                <Text style={styles.text_list2}>1234567891234567891234567894569875</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}
