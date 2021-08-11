import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'

export default function Perfil(){
    return(
        
        <View style={styles.container_geral}>
            <View style={styles.cabeçalho}>

                <View style={styles.perfil}>
                    <View style={styles.container_img}>
                        <Image style={styles.imagem_perfil} source={require('../../assets/img_do_perfil.jpg')} />
                    </View>

                    <TouchableOpacity style={styles.edit}>
                        <MaterialCommunityIcons name="pencil" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.usuario_text}>
                    <Text style={styles.text1}>Nome do usuario</Text>
                    <Text style={styles.text2}>Emaildousuario@hotmail.com</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.container_button}>
                    <LinearGradient style={styles.containers} colors={['#FFFFFF','#DCDCDC']}>
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
                    <LinearGradient style={styles.containers} colors={['#FFFFFF','#DCDCDC']}>
                        <View style={styles.text_button}>
                            <Text style={styles.text_container}>
                                DISTRIBUIÇÕES CRIADAS                           03
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>    

        </View>
    )
}