import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1758CE'
    },
    title: {

    },
    logo: {
        flex: 1,
        alignSelf: "center",
        margin: 30,
        width: 162,
        height: 149.5,
        marginTop: '20%'
    },
    input: {
        height: 50,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'rgba(99,5,162,0.6)',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15    
    },
    button: {
        backgroundColor: '#FFF',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,  
        elevation: 5
    },
    buttonTitle: {
        color: '#6305A2',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#FFF'
    },
    footerLink: {
        color: "#5EFFEC",
        fontWeight: "bold",
        fontSize: 16
    }
})