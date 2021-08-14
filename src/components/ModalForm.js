import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function ModalForm({changeVisible}) {
    return (
        <View style={styles.containerAll}>
            <TouchableOpacity
                style={styles.closecircle}
                onPress={changeVisible}
            >
                <AntDesign name='closecircle' size={40} color='red' />
            </TouchableOpacity>

            <ScrollView
                style={styles.containerdescription}
            >

                <View style={styles.containerTitle}>
                    <Text style={styles.texttitle}>Criando Distribuição</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        maxLength= {15} />

                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        multiline= {true} />

                    <TextInput
                        style={styles.input}
                        placeholder="Localização" />

                    <TextInput
                        style={styles.input}
                        placeholder="Vagas"
                        keyboardType='numeric' />
                </View>        

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <Text style={styles.textbutton}>Criar</Text>
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

    },
    containerTitle: {
        alignItems: 'center',
    },
    texttitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 2
    },
    closecircle: {
        marginLeft: 300,
        marginTop: 10
    },
    inputs: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        textAlign: 'center',
        width: 300,
        height: 50,
        marginTop: 11,
        borderRadius: 20,
        borderColor: '#D3D3D3',
        borderWidth: 1,
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
