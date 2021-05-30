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
import Modalcomp from '../../components/Modal'

export default function Cadastro() {

    const [eye, setEye] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { submitRegister, scrennLogin } = useContext(Mycontext)

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={styles.container_geral} behavior={Platform.OS === "ios" ? "padding" : null}>
            <ImageBackground style={styles.img_fundo} source={require('../../assets/fundo.png')}>
                <ScrollView  keyboardShouldPersistTaps='handled'>

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
                                onChangeText={text => setName(text)}
                            />

                            <TextInput
                                style={styles.input1}
                                placeholder="Insira seu e-mail"
                                autoCorrect={false}
                                keyboardType='email-address'
                                onChangeText={text => setEmail(text)}
                            />

                            <View style={styles.input_senha}>
                                <TextInput
                                    style={[styles.input2, { marginTop: 22 }]}
                                    placeholder="Insira sua senha"
                                    autoCorrect={false}
                                    secureTextEntry={eye}
                                    onChangeText={text =>  setPassword(text)}
                                />
                                <TouchableOpacity>
                                    <Feather
                                        style={styles.olho}
                                        name={eye ? "eye-off" : "eye"}
                                        onPress={() => setEye(!eye)}
                                        size={22} />
                                </TouchableOpacity>
                            </View>

                         
                        </View>

                        <View style={styles.container_button}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    submitRegister(name, email, password)
                                }}
                            >
                                <Text style={styles.text_button}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
                {scrennLogin && <Modalcomp />}
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}