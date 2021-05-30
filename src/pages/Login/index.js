import React, { useState, useContext, useEffect } from 'react';
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
import { Mycontext } from '../../context/AuthContext'


export default function Login() {

    const [ligado, setLigado] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();
    const { submitLogin } = useContext(Mycontext) 

    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    }

    useEffect(()=> {
        
    }, [])

    return (
        <KeyboardAvoidingView style={styles.container_geral} behavior={Platform.OS === "ios" ? "padding" : null}>
            <ImageBackground style={styles.img_fundo} source={require('../../assets/fundo.png')}>
                <ScrollView keyboardShouldPersistTaps='handled'>

                    <View>

                        <View style={styles.container_text}>
                            <Text style={styles.text1}>Bem Vindo de Volta!</Text>
                            <Text style={styles.text2}>Entre com sua conta ou</Text>
                            <Text style={styles.text2}>crie uma nova</Text>
                        </View>

                        <View style={styles.log_cad}>
                            <TouchableOpacity>
                                <Text style={styles.log_text}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={navigateToCadastro}>
                                <Text style={styles.log_text2}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <TextInput
                                style={styles.input}
                                placeholder="Insira seu e-mail"
                                autoCorrect={false}
                                keyboardType='email-address'
                                onChangeText={(text) => setEmail(text)}
                            />

                            <View style={styles.input_senha}>
                                <TextInput
                                    style={[styles.input2, { marginTop: 22 }]}
                                    placeholder="Insira sua senha"
                                    autoCorrect={false}
                                    secureTextEntry={ligado}
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <TouchableOpacity>
                                    <Feather
                                        style={styles.olho}
                                        name={ligado ? "eye-off" : "eye"}
                                        onPress={() => setLigado(!ligado)}
                                        size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.esqueceu}>
                            <TouchableOpacity>
                                <Text style={styles.esqueceu_text}>Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container_button}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => submitLogin(email, password)}
                            >
                                <Text style={styles.text_button}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}