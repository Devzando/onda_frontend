import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function Tips(){
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
                    <Text style={styles.text_corpo}>As cascas da batata e da</Text>
                    <Text style={styles.text_corpo}>mandioquinha podem ser assadas</Text>
                    <Text style={styles.text_corpo}>em forno ou fritas em óleo quente</Text>
                    <Text style={styles.text_corpo}>e servidas como aperitivo.</Text>
                </View>

                <Image style={styles.imagem} source={require('../../assets/batatas.png')} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text_button}>Próxima dica</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}