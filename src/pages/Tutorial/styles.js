import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container_geral: {
        flex: 1
    },

    imagens: {
        width: '83%',
        height: '42%',
        marginHorizontal: 20,
        marginTop: 90,
    },

    tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 8
    },
    
    text: {
        marginLeft: 20,
        fontSize: 23
    },

    cadastrar: {
        backgroundColor: '#983264',
        width: '45%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logar: {
        backgroundColor: '#F8D753',
        width: '45%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text_botão: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    botão: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: -80
    },

    botão2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    proximo: {
        backgroundColor: '#983264',
        borderRadius: 12,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 105,
        marginTop: -20
    },

    anterior: {
        backgroundColor: '#A8A8A8',
        borderRadius: 12,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 105,
        marginTop: -20
    }
    
})