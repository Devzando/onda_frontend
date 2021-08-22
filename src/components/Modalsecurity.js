import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'

export default function ModalSecurity() {
    return (
            <Modal
            style={styles.modal}
            transparent={true}>
                <View style={styles.container_geral}>
                    <Image style={styles.image} source={require('../assets/fundo_modal.png')} />
                    <Image style={styles.image2} source={require('../assets/deseja_continuar.png')} />

                    <Text style={styles.tittle}>Deseja continuar?</Text>

                    <View style={styles.container_buttons}>

                        <TouchableOpacity>
                            <View style={styles.view_button}>
                                <Text style={styles.text_button}>Cancelar</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.view_button2}>
                                <Text style={styles.text_button}>Sim</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
    )
}
const styles = StyleSheet.create({
    container_geral: {
        flex: 1,
        marginBottom: 166,
        marginTop: 200,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#FFFFFF'
    },

    image: {
        width: 320,
        height: 190
    },
    
    image2: {
        width: 200,
        height: 138,
        marginTop: -130,
        marginBottom: 100
    },

    tittle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: -95,
        marginBottom: 15
    },

    container_buttons: {
        flexDirection: 'row'
    },

    view_button: {
        backgroundColor: '#9E9E9E',
        borderRadius: 40,
        width: 110,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },

    view_button2: {
        backgroundColor: '#983264',
        borderRadius: 40,
        width: 110,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
        marginLeft: 20
    },

    text_button: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})
