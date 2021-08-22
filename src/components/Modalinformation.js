import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function ModalInformation({changeVisible, listinformation}) {
    return (
        <View style={styles.containerAll}>
            <ScrollView style={styles.scroll}>
            <TouchableOpacity
                style={styles.closecircle}
                onPress={changeVisible}
            >
                <AntDesign name='closecircle' size={40} color='red' />
            </TouchableOpacity>
            <View style={styles.containerTitle}>
                <Text style={styles.texttitle}>{listinformation.name}</Text>
            </View>

            <ScrollView
                style={styles.containerdescription}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <Text style={styles.textdescription}>{listinformation.description}</Text>
            </ScrollView>

            <View style={styles.containerTexts}>
                <Text style={styles.textsimple}>Término: {listinformation.date}</Text>
                <Text style={styles.textsimple}>Local: {listinformation.location}</Text>
                <Text style={styles.textsimple}>Vagas Restantes: {listinformation.vacancies}</Text>
                <Text style={styles.textsimple}>Horário: {listinformation.time}</Text>
            </View>

            <View style={styles.container_inscritos}>
                <Text style={styles.textsimple2}>Inscritos:</Text>
            </View>

            <View style={styles.list_inscritos}>
                <View style={styles.inscrito1}>
                    <Image style={styles.icon} source={require('../assets/icone.png')} />
                    <View style={styles.container_texts_list}>
                        <Text style={styles.text_inscrito}>Nome</Text>
                        <Text style={styles.text_inscrito}>Email</Text>
                        <Text style={styles.text_inscrito}>Senha</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Text style={styles.textbutton}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    containerAll: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 100   
    },

    scroll: {
        marginTop: 10
    },

    closecircle: {
        marginLeft: 300,
        marginTop: 10
    },

    containerTitle: {
        alignItems: 'center',
    },

    texttitle: {
        fontSize: 40,
        fontWeight: 'bold'
    },

    containerdescription: {
        backgroundColor: '#ECECEC',
        marginHorizontal: 15,
        marginTop: 19,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
        height: 90
    },

    textdescription: {
        textAlign: 'justify',
    },

    containerTexts: {
        marginHorizontal: 15,
        marginTop: 32
    },

    textsimple: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },

    container_inscritos: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    textsimple2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },

    list_inscritos: {
        margin: 20
    },

    inscrito1: {
        flexDirection: 'row',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        paddingLeft: 10,
        paddingVertical: 7,
        alignItems: 'center'
    },

    icon: {
        width: 50,
        height: 50,
        marginRight: 10
    },

    text_inscrito: {
        fontSize: 15
    },

    containerButton: {
        alignItems: 'center'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#983264',
        borderRadius: 35,
        height: 50,
        width: 200,
        marginTop: 17,
        marginBottom: 10
    },

    textbutton: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white'
    }
})
