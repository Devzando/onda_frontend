import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native'

import { Userimgcontext } from '../context/userimgContext'

export default function ModalImgsProfile({ imgs, visible }) {
    const [modalVisible, setModalVisible] = useState(true)
    const { updateuserimg } = useContext(Userimgcontext)

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Escolha uma imagem</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {imgs.map(item => (
                                <TouchableOpacity
                                    style={{ ...styles.openButton }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        visible()
                                        updateuserimg(item.id)
                                    }}
                                    key={item.id}
                                >
                                    <Image
                                        style={{ width: 50, height: 50, marginHorizontal: 5 }}
                                        source={{ uri: item.imgurl }}
                                    />
                                </TouchableOpacity>

                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        borderRadius: 20,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});