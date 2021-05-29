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


export default function Login() {

    const [ligado, setLigado] = useState(true)

    const navigation = useNavigation();

    function navigateToCadastro() {
        navigation.navigate('Cadastro');
    }

    return (
        <KeyboardAvoidingView style={styles.container_geral} behavior={Platform.OS === "ios" ? "padding" : null}>
            <ImageBackground style={styles.img_fundo} source={require('../../assets/fundo.png')}>
                <ScrollView endFillColor='#ECECEC' keyboardShouldPersistTaps='handled'>

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
                                onChangeText={() => { }}
                            />

                            <View style={styles.input_senha}>
                                <TextInput
                                    style={[styles.input2, { marginTop: 22 }]}
                                    placeholder="Insira sua senha"
                                    autoCorrect={false}
                                    secureTextEntry={ligado}
                                    onChangeText={() => { }}
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
                                onPress={() => { }}
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