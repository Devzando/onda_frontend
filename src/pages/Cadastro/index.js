import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Text,
    ImageBackground,
    ScrollView,
    Platform,
} from 'react-native';

import styles from './styles';
import { greaterOrEq, Value } from 'react-native-reanimated';


export default function Cadastro() {

    const [eye, setEye] = useState(true)
    const [eye2, setEye2] = useState(true)
    const [senha, setSenha] = useState(null)
    const [senha2, setSenha2] = useState(null)
    const [errorsenha2, setErrorSenha2] = useState(null)

    const validar = () => {
        let error = false
        setErrorSenha2(null)
        if (senha2 != senha) {
            setErrorSenha2("Sua senha esta diferente")
            error = true
        }
        return !error
    }

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={styles.container_geral} behavior={Platform.OS === "ios" ? "padding" : null}>
            <ImageBackground style={styles.img_fundo} source={require('../../assets/fundo.png')}>
                <ScrollView endFillColor='#ECECEC' keyboardShouldPersistTaps='handled'>

                    <View>

                        <View style={styles.container_text}>
                            <Text style={styles.text1}>É bom ter você aqui!</Text>
                        </View>

                        <View style={styles.log_cad}>
                            <TouchableOpacity onPress={() => navigation.goBack()} >
                                <Text style={styles.log_text2}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.log_text}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <TextInput
                                style={styles.input}
                                placeholder="Insira seu nome de usuário"
                                autoCorrect={false}
                                onChangeText={() => { }}
                            />

                            <TextInput
                                style={styles.input1}
                                placeholder="Insira seu e-mail"
                                autoCorrect={false}
                                keyboardType='email-address'
                                onChangeText={() => { }}
                            />

                            <View style={styles.input_senha}>
                                <TextInput
                                    style={[styles.input2, { marginTop: 22 }]}
                                    placeholder="Insira sua senha"
                                    autoCorrect={false}
                                    secureTextEntry={eye}
                                    onChangeText={value => { setSenha(value) }}
                                />
                                <TouchableOpacity>
                                    <Feather
                                        style={styles.olho}
                                        name={eye ? "eye-off" : "eye"}
                                        onPress={() => setEye(!eye)}
                                        size={22} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.input_senha}>
                                <TextInput
                                    style={[styles.input2, { marginTop: 22 }]}
                                    placeholder="Confirme sua senha"
                                    autoCorrect={false}
                                    secureTextEntry={eye2}
                                    errorMensage={errorsenha2}
                                    onChangeText={value => {
                                        setSenha2(value)
                                        setErrorSenha2(null)
                                    }}
                                />
                                <TouchableOpacity>
                                    <Feather
                                        style={styles.olho}
                                        name={eye2 ? "eye-off" : "eye"}
                                        onPress={() => setEye2(!eye2)}
                                        size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.container_button}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={validar}
                            >
                                <Text style={styles.text_button}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}