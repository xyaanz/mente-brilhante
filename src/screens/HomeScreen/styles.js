import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1758CE',

    },
    menuContainer: {
        width: '99%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    menuArrows: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 4,
        color: '#FFF'
    },
    menu: {
        flexDirection: 'row'
    },
    btnMenu: {
        backgroundColor: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 8,
        margin: 7,
        marginLeft: 0,
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
        borderTopStartRadius: 0,
        borderBottomColor: '#1669ff',
        borderBottomWidth: 10
    },
    headerGraphic: {
        flexDirection: 'row',
        height: '50%',
        width: '100%',
        borderRadius: 3,
    },
    pickerContainer: {
        flex: 1
    },
    statsGraphic: {
        width: '45%',
        height: 75,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#1758CE',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bolsaPoints: {
        flex: 1,
        alignItems: 'center'
    },
    txtPoints: {
        color: 'grey',
        fontSize: 10,
        fontWeight: 'bold'
    },
        nmbPoints: {
        fontSize: 17,
        marginTop: 5,
        fontWeight: 'bold'
    },
    bolsaVariationContainer: {
        width: '25%',
        height: '100%',
    },
        bolsaVariation: {
        marginTop: 5
    },
        variation: {
        color: 'green'
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
        backgroundColor: '#FFF',
       borderRadius: 50
    },
    div: {
        width: '100%',
        height: 15,
    },
    footerRight: {
        flex: 1,
        paddingLeft: 10
    },
    footerStats: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 7,
    },
    titleDesc: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    statsDesc: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    statsDescSym: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    statsDescPrc: {
        marginHorizontal: 10,
        fontSize: 16
    },
    statsDescVrt: {
        color: 'green'
    },
    imageFooter: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    }


})
       