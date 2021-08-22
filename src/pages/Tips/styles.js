import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container_geral: {
        flex: 1
    },
    
    cabeçalho: {
        backgroundColor: '#B46F91',
        elevation: 10
    },

    texts: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    },

    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },

    corpo: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    texts_corpo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },

    text_corpo: {
        color: '#303030',
        fontSize: 18,
        fontWeight: 'bold',
    },

    imagem: {
        height: 265,
        width: 265,
        marginTop: 10
    },

    container_button: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        marginBottom: 30
    },

    button: {
        backgroundColor: '#983264',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        height: 50,
        width: 275,
        elevation: 7
    },

    text_button: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})