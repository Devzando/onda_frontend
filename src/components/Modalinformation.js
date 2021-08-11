import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function ModalInformation({changeVisible}) {
    return (
        <View style={styles.containerAll}>
            <TouchableOpacity
                style={styles.closecircle}
                onPress={changeVisible}
            >
                <AntDesign name='closecircle' size={40} color='red' />
            </TouchableOpacity>
            <View style={styles.containerTitle}>
                <Text style={styles.texttitle}>Cesta Básica</Text>
            </View>

            <ScrollView
                style={styles.containerdescription}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <Text style={styles.textdescription}>
                    gbfnhjdmkcnvbmdjfmndhgbcvnmdjurjdhncmklosi
                    gbfnhjdmkcnvbmdjfmndhgbcvnmdjurjdhncmklos
                </Text>
            </ScrollView>
            <View style={styles.containerTexts}>
                <Text style={styles.textsimple}>Término: 15/08/2021</Text>
                <Text style={styles.textsimple}>Local:</Text>
                <Text style={styles.textsimple}>Vagas Restantes:</Text>
                <Text style={styles.textsimple}>Horário: </Text>
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
        fontSize: 18,
        fontWeight: 'bold'
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
