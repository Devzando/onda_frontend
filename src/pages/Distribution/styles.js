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
        fontSize: 35,
        fontWeight: 'bold'
    },

    botões: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        marginTop: 30,
    },

    botão: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#983264',
        borderRadius: 50,
        width: 150,
        height: 50
    },

    botão2: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#A8A8A8',
        width: 150,
        height: 50
    },

    text_criadas: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    text_cadastradas: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A8A8A8'
    },

    
    corpo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    imagem: {
        width: 300,
        height: 235
    },

    text_corpo: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    text_corpo1: {
        color: '#565656',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },

    text_corpo2: {
        color: '#565656',
        fontSize: 20,
    },

    lixeira: {
        marginTop: 8,
        marginLeft: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#757575',
        borderRadius: 50,
        width: 50,
        height: 50,
    },

    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 13,
        marginTop: -8
    }
})