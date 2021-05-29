import React from 'react';

import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Text, ImageBackground, Button } from 'react-native';

//import styles from './styles';

export default function Cadastro() {
    return(
//        <ImageBackground source={require('../../assets/fundo.png')}>

            <KeyboardAvoidingView>

                <View>
                    <Text>É bom ter você aqui!</Text>
                </View>

                <View>
                    <TouchableOpacity>Login</TouchableOpacity>
                    <TouchableOpacity>Cadastrar</TouchableOpacity>
                </View>

                <View>
                    <TextInput>Insira seu nome de usuário</TextInput>
                    <TextInput>Insira seu e-mail</TextInput>
                    <TextInput>Insira sua senha</TextInput>
                    <TextInput>Confirme sua senha</TextInput>
                </View>

                <View>
                    <Button>Cadastrar</Button>
                </View>

            </KeyboardAvoidingView>

//        </ImageBackground>
    );
}