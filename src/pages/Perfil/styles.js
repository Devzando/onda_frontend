import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    container_geral: {
        flex: 1,
    },

    cabeçalho: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#B46F91',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container_img: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        borderWidth: 5,
        borderColor: '#FFFFFF',
        marginTop: 40,
    },

    imagem_perfil: {
        borderRadius: 200,
        maxWidth: 170,
        maxHeight: 170,
        height: 170,
        width: 170,
        resizeMode: 'cover',
    },

    edit: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        marginTop: -30,
        marginLeft: 67,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: '#983264'
    },
    usuario_text: {
        marginTop: 5,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 5
    },

    text2: {
        fontSize: 15,
        color: '#ECDBE3'
    },

    buttons: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containers: {
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 15,
        width: 320,
        height: 90,
    },

    text_button: {
        elevation: 20
    },

    text_container: {
        color: '#565656',
        fontSize: 15,
        fontWeight: 'bold'
    }
})