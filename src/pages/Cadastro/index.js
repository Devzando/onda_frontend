import React, {useState} from 'react';
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


export default function Cadastro() {

    const [ligado,setLigado]=useState(true)

    return (
        <KeyboardAvoidingView style={styles.container_geral} behavior={Platform.OS === "ios"? "padding":null}>
            <ScrollView endFillColor='#ECECEC' keyboardShouldPersistTaps='handled'>
                <ImageBackground style={styles.img_fundo} source={require('../../assets/fundo.png')}>

                    <View>

                        <View style={styles.container_text}>
                            <Text style={styles.text1}>É bom ter você aqui!</Text>
                        </View>

                        <View style={styles.log_cad}>
                            <TouchableOpacity>
                                <Text style={styles.log_text}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.log_text2}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputs}>
                            <TextInput
                                style={styles.input}
                                placeholder="Insira seu nome de usuário"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Insira seu e-mail"
                                autoCorrect={false}
                                keyboardType='email-address'
                                onChangeText={() => {}}
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
                                    name={ligado?"eye-off":"eye"} 
                                    onPress={() => setLigado(!ligado)}
                                    size={22} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.input_senha}>
                                <TextInput
                                    style={[styles.input2, { marginTop: 22 }]}
                                    placeholder="confirme sua senha"
                                    autoCorrect={false}
                                    secureTextEntry={ligado}
                                    onChangeText={() => { }}
                                />
                                <TouchableOpacity>
                                    <Feather
                                    style={styles.olho} 
                                    name={ligado?"eye-off":"eye"} 
                                    onPress={() => setLigado(!ligado)}
                                    size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.container_button}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {}}
                            >
                                <Text style={styles.text_button}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}