import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Touchable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles'

export default function Distribution(){
    
    const [button1, setButton1] = useState(true)
    
    return(
        <View style={styles.container_geral}>
            <View style={styles.cabeçalho}>
                <View style={styles.texts}>
                    <Text style={styles.text}>Distribuições</Text>
                </View>
            </View>

            {button1?
                <View>
                    <View style={styles.botões}>
                        <TouchableOpacity style={styles.botão} onPress={() => setButton1(true)}>
                            <Text style={styles.text_criadas}>Criadas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botão2} onPress={() => setButton1(false)}>
                            <Text style={styles.text_cadastradas}>Cadastradas</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.corpo}>
                        <Image style={styles.imagem} source={require('../../assets/nada_aqui.png')} />
                        
                        <View style={styles.text_corpo}>
                            <Text style={styles.text_corpo1}>Ah não!</Text>
                            <Text style={styles.text_corpo2}>Ainda não há nada</Text>
                            <Text style={styles.text_corpo2}>por aqui.</Text>
                        </View>
                    </View>

                    <View style={styles.icons}>
                            <View />
                            
                            <TouchableOpacity>
                                <Ionicons name="add-circle" size={60} color="#983264" />
                            </TouchableOpacity>
                    </View>
                </View>
                :
                <View>
                    <View style={styles.botões}>
                        <TouchableOpacity style={styles.botão2} onPress={() => setButton1(true)}>
                            <Text style={styles.text_cadastradas}>Criadas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botão} onPress={() => setButton1(false)}>
                            <Text style={styles.text_criadas}>Cadastradas</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.corpo}>
                        <Image style={styles.imagem} source={require('../../assets/nada_aqui.png')} />
                        
                        <View style={styles.text_corpo}>
                            <Text style={styles.text_corpo1}>Ah não!</Text>
                            <Text style={styles.text_corpo2}>Ainda não há nada</Text>
                            <Text style={styles.text_corpo2}>por aqui.</Text>
                        </View>
                    </View>
                </View>
            }
        </View>

    )
}

/*<TouchableOpacity style={styles.lixeira}>
                                <FontAwesome5 name="trash" size={25} color="#FFFFFF" />
                            </TouchableOpacity>*/