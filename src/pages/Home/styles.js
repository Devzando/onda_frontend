import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container_geral: {
        flex: 1
    },

    container_icon: {
        backgroundColor: '#B46F91',
    },

    cabeçalho: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        backgroundColor: '#B46F91',

    },

    view_log_out: {
        marginTop: 40,
        width: 60
    },

    log_out: {
        marginLeft: 15
    },

    texts: {
        marginTop: 15,
        marginLeft: 15
    },

    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF'
    },

    view_imagem: {
        marginTop: 15,
        marginBottom: 0.5,
        marginRight: 25
    },

    imagem_cabeçalho: {
        width: 130,
        height: 123
    },

    view_distribuição: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text_distribuição: {
        fontSize: 28,
        color: '#565656'
    },

    container_list: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 12,
        marginHorizontal: 15,
        borderRadius: 30,
        elevation: 10,
        backgroundColor: '#CAA2B6'
    },

    text_list1: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: -10
    },

    text_list2: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10
    },

    text_list3: {
        fontSize: 12,
        fontWeight: '600'
    }
})