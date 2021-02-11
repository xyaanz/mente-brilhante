import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("Este usuário não está registrado.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View  style={styles.container}>          
            <KeyboardAwareScrollView
                style={{ flex: 1 }}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/bigLogo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="rgba(99,5,162,0.4)"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="rgba(99,5,162,0.4)"
                    secureTextEntry
                    placeholder='Senha'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>ENTRAR</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
            <View style={styles.footerView}>
                    <Text style={styles.footerText}>Ainda não é registrado? </Text>
                    <Text onPress={onFooterLinkPress} style={styles.footerLink}>Criar conta</Text>
            </View>
        </View>
    )
}