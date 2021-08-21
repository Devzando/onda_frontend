import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { api } from '../services/api'
import { DistributionContext } from '../context/distributionContext';

export default function ModalForm({ changevisible }) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [vacancies, setVacancies] = useState('')
    const [imgs, setImgs] = useState([])
    const [idimg, setIdImgs] = useState(1)
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const { submit } = useContext(DistributionContext)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate)
        console.log(event)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    };

    const showDatepicker = () => {
        showMode('date')
    };

    const showTimepicker = () => {
        showMode('time');
    };

    async function listimgs() {

        try {
            const response = await api.get('/listimgdist')
            setImgs(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let mounted = true; // utilizo isso para previnir o erro de peformace
        if (mounted) {
            listimgs()
        }

        return () => mounted = false
    }, [])

    return (
            <ScrollView>
        <View style={styles.containerAll}>
            <TouchableOpacity
                style={styles.closecircle}
                onPress={changevisible}
            >
                <AntDesign name='closecircle' size={40} color='red' />
            </TouchableOpacity>


            <View style={styles.containerTitle}>
                <Text style={styles.texttitle}>Criando Distribuição</Text>
            </View>
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setName(text)}
                        placeholder="Nome"
                        maxLength={15} />

                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDescription(text)}
                        placeholder="Descrição"
                        multiline={true} />

                    <TextInput
                        style={styles.input}
                        onChangeText={text => setLocation(text)}
                        placeholder="Localização" />

                    <TextInput
                        style={styles.input}
                        onChangeText={text => setVacancies(text)}
                        placeholder="Vagas"
                        keyboardType='numeric' />

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={showDatepicker}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Data"
                            editable={false}
                            keyboardType='numeric' />

                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={showTimepicker}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Horário"
                            editable={false}
                            keyboardType='numeric' />

                    </TouchableOpacity>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                    <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10 }}>Escolha uma imagem</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {imgs.map(item => (
                            <TouchableOpacity
                                style={idimg === item.id && { backgroundColor: '#983264' }}
                                key={item.id}
                                onPress={() => setIdImgs(item.id)}
                            >
                                <Image style={{ height: 50, width: 50 }} source={{ uri: item.imgurl }} />
                            </TouchableOpacity>
                        ))}

                    </View>

                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            submit(name, description, location, vacancies, idimg, date)
                            changevisible()
                        }}
                    >
                        <Text style={styles.textbutton}>Criar</Text>
                    </TouchableOpacity>
                </View>

        </View>
            </ScrollView>
    )
}
const styles = StyleSheet.create({
    containerAll: {

        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20

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
