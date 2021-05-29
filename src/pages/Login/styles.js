import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container_geral: {
        flex: 1
    },

    img_fundo: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%'
    },

    container_text: {
        marginLeft: 20,
        marginTop: 125,
        marginBottom: 48
    },

    text1: {
        opacity: 0.72,
        fontWeight:'bold',
        fontSize: 35
    },

    text2: {
        fontWeight: 'bold',
        opacity: 0.4,
        fontSize: 22
    },

    log_cad: {
        marginLeft: 42,
        marginBottom: 30,
        flexDirection: 'row',
    },

    log_text: {
        fontWeight: 'bold',
        borderBottomWidth: 1,
        fontSize: 22,
        marginRight: 17
    },

    log_text2: {
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 22,
        marginRight: 17
    },

    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,

    },

    input: {
        backgroundColor: '#FFFFFF',
        width: "90%",
        height: 60,
        fontSize: 18,
        padding: 20,
        borderRadius: 20,
        marginTop: 5
    },

    input_senha: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 60,
        borderRadius: 20,
        marginTop: 22
    },

    input2: {
        width: '90%',
        padding: 20,
        height: 60,
        marginBottom: 21,
        fontSize: 18
    },

    olho: {
        opacity: 0.4,
        marginRight: 13
    },

    esqueceu: {
        alignItems: 'center',
        marginTop: 10
    },

    esqueceu_text: {
        fontSize: 18,
        opacity: 0.4
    },

    container_button:{
        alignItems: 'center',
        marginTop: 20,   
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "60%",
        height: Dimensions.get('window').height -620 ,
        backgroundColor: '#983264',
        borderRadius: 50
    },

     text_button:{
        fontSize: 22,
        fontWeight: '900',
        color: "white"
     }

});