import React from 'react'
import { View, Image, Text, Touchable, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'
 
const screens=[{
        key: '1',
        tittle: 'Seja um doador',
        text: 'Crie e divulgue suas ',
        text2: 'distribuições',
        Image: require('../../assets/tutorial1.png'),
    },

    {    
        key: '2',
        tittle: 'Seja um beneficiario',
        text: 'Cadastre-se em',
        text2: 'distribuições já criadas para',
        text3: 'recebê-las',
        Image: require('../../assets/tutorial2.png'),
    },

    {
        key: '3',
        tittle: 'Aproveitamento integral dos alimentos',
        text: 'Receba dicas de como',
        text2: 'aproveitar mais e melhor os',
        text3: 'alimentos',
        Image: require('../../assets/tutorial3.png'),
    },

    {
        key: '4',
        tittle: '        Comece agora!',
        Image: require('../../assets/tutorial4.png'),
        button: 
        <TouchableOpacity style={styles.cadastrar}>
            <Text style={styles.text_botão}>Cadastrar-se</Text>
        </TouchableOpacity>,
        button2: 
        <TouchableOpacity style={styles.logar}>
            <Text style={styles.text_botão}>Fazer Login</Text>
        </TouchableOpacity>
}]



export default function Tutorial(){

    function renderscreens({item}){
        return(
            <View style={styles.container_geral}>
                <Image style={styles.imagens} source={item.Image} />
                <Text style={styles.tittle}>{item.tittle}</Text>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.text}>{item.text2}</Text>
                <Text style={styles.text}>{item.text3}</Text>
                <View style={styles.botão}>{item.button}</View>
                <View style={styles.botão2}>{item.button2}</View>
            </View>
        )
    }

    return(
        <AppIntroSlider
        renderItem={renderscreens}
        data={screens}
        dotStyle={{
            marginTop: -1150,
            backgroundColor: '#A8A8A8'}}
        activeDotStyle={{
            marginTop: -1150,
            backgroundColor: '#983264',
            width: 15,
            height: 15,
            borderRadius: 20
        }}
        dotClickEnabled={false}
        showDoneButton={false}
        showPrevButton={true}
        renderNextButton={() => 
        <View style={styles.proximo}>
            <FontAwesome name="arrow-right" size={24} color="#FFFFFF" />
        </View>}
        renderPrevButton={() => 
        <View style={styles.anterior}>
            <FontAwesome name="arrow-left" size={24} color="#565656" />
        </View>}
        />
    )
}