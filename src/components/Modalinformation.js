import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function ModalInformation({changeVisible, listinformation}) {
    return (
        <View style={styles.containerAll}>
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

            <View>
                <Text style={styles.textsimple2}>Inscritos:</Text>
            </View>
            
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Text style={styles.textbutton}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
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
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
        paddingTop: 4,
        paddingBottom: 4
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

    textsimple2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
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
