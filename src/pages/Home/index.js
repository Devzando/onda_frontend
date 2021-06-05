import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Home(){
    return(

        <View style={styles.container_geral}>
            <ScrollView>

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

                <TouchableOpacity style={styles.container_list}>
                    <View>
                        <Image style={styles.img_list} source ={require('../../assets/frutas.png')} />
                    </View>

                    <View style={styles.texts_list}>
                        <Text style={styles.text_list1}>CESTA BÁSICA</Text>
                        <Text style={styles.text_list2}>(INFORMAÇÃO)</Text>
                        <Text style={styles.text_list2}>TÉRMINO: 22/06/2021</Text>
                        <Text style={styles.text_list2}>VAGAS 0/20</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container_list2}>
                    <View>
                        <Image style={styles.img_list} source ={require('../../assets/sacolas.png')} />
                    </View>

                    <View style={styles.texts_list}>
                        <Text style={styles.text_list1}>TÍTULO</Text>
                        <Text style={styles.text_list2}>CESTA BÁSICA NO BAIRRO XXXX</Text>
                        <Text style={styles.text_list2}>TÉRMINO: 22/06/2021</Text>
                        <Text style={styles.text_list2}>VAGAS 0/20</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container_list3}>
                    <View>
                        <Image style={styles.img_list} source ={require('../../assets/frutas.png')} />
                    </View>

                    <View style={styles.texts_list}>
                        <Text style={styles.text_list1}>TÍTULO</Text>
                        <Text style={styles.text_list2}>CESTA BÁSICA NO BAIRRO XXXX</Text>
                        <Text style={styles.text_list2}>TÉRMINO: 22/06/2021</Text>
                        <Text style={styles.text_list2}>VAGAS 0/20</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.container_list}>
                    <View>
                        <Image style={styles.img_list} source ={require('../../assets/sacolas.png')} />
                    </View>

                    <View style={styles.texts_list}>
                        <Text style={styles.text_list1}>1234567891231213215</Text>
                        <Text style={styles.text_list2}>1234567891234567891234567894569698</Text>
                        <Text style={styles.text_list2}>1234567891234567891234567894569878</Text>
                        <Text style={styles.text_list2}>1234567891234567891234567894569875</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
