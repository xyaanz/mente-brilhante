import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, AcoesBr, AcoesEua, Caixa, FundosImobiliarios } from './src/screens'
import {decode, encode} from 'base-64'
import { LogBox } from 'react-native';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

   return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Home"
                options={{title: '',
                    headerStyle: {
                    shadowColor: 'transparent',
                    elevation: 0,
                    backgroundColor: '#1758CE'
                    }
                }}>
                {props => <HomeScreen {...props} extraData={user} />}
              </Stack.Screen>
              <Stack.Screen name="Login" options={{headerShown: false, }} component={LoginScreen} />
              <Stack.Screen name="Registration" options={{ headerShown: false,}} component={RegistrationScreen} />
              <Stack.Screen name="AcoesBr" component={AcoesBr} options={{title: 'Acões'}} />
              <Stack.Screen name="AcoesEua" component={AcoesEua} options={{title: 'Investimentos internacionais'}} />
              <Stack.Screen name="FundosImobiliarios" component={FundosImobiliarios} options={{title: 'Fundo imobiliário'}} />
              <Stack.Screen name="Caixa" component={Caixa} options={{title: 'Caixa'}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}