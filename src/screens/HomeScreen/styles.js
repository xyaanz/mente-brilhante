import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d5d5d5',
   
    },
    menuContainer: {
        width: '99%',
        height: 40
    },
    menu: {
        flexDirection: 'row'
    },
    btnMenu: {
        borderRadius: 3,
        backgroundColor: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 8,
        margin: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#a3a3a3'
    },
    txtBtn: {
        fontSize: 12,
        color: '#1758CE',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bidenContainer: {
        width: '90%',
        height: 180,
        marginTop: 10,
        shadowOffset: { height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 4,  
        elevation: 10
    },
    biden: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    graphic: {
        width: '90%',
        height: 150,
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderTopStartRadius: 0
    },
    headerGraphic: {
        flexDirection: 'row',
        height: '50%',
        width: '100%'

    },
    pickerContainer: {
        flex: 1
    },
    statsGraphic: {
        width: '45%',
        height: 75,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#d5d5d5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 1,
        width: '90%',
        marginBottom: 30,
        marginTop: 10,
        flexDirection: 'row'
    },
    footerLeft: {
        flex: 1
    },
    footerBox: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    div: {
        width: '100%',
        height: 15,
        backgroundColor: '#d5d5d5'
    },
    footerRight: {
        flex: 1,
        backgroundColor: '#d5d5d5',
        paddingLeft: 10
    },
    footerStats: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20
    }
})