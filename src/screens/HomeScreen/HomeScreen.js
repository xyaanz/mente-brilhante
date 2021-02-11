import React, {useEffect, useState} from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import api from '../../services/api'
import { LineChart, Path } from 'react-native-svg-charts'
import { Circle, Defs, Stop, LinearGradient } from 'react-native-svg'
import DropdownMenu from 'react-native-dropdown-menu';



export default function HomeScreen({props, navigation}) {


    const [acoes, setAcoes] = useState([])
    //const [acao, setAcao] = useState('')


    //useEffect(() => {
    //    api.get('stock_price?key=d81dd1f8&symbol=' + acao).then(res => {
    //              const acaoPonto = '.' + acao
    //              console.log(setAcao)
    //               setAcoes(res.data.results.BIDI4)
    //            }).catch(error => console.log(error))
   // },[setAcao])

    useEffect(() => {
        api.get('stock_price?key=8fe225c7&symbol=bidi4').then(res => {
        setAcoes(res.data.results.BIDI4)
        }).catch(error => console.log(error))
      },[])

    //const selectAcao = () => {
     //   api.get('stock_price?key=d81dd1f8&symbol=' + acao).then(res => {
     //       const acaoPonto = '.' + acao
     //       console.log(acaoPonto)
     //       setAcoes(res.data.results)
     //    }).catch(error => console.log(error))
   //  }



    const data = [ 1.2, 1.6, -1.2, 0.9, 1.4]
    const acoesData = [["BIDI4", "ITSA4", "PETR4", "MGLU3"]];

    const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => (
            <Circle
                key={ index }
                cx={ x(index) }
                cy={ y(value) }
                r={ 4 }
                stroke={ '#000' }
                fill={ 'rgb(134, 65, 244)' }
            />
        ))
    }

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
            </LinearGradient>
        </Defs>
    )


    const Shadow = ({ line }) => (
        <Path
            key={'shadow'}
            y={4}
            d={line}
            fill={'none'}
            strokeWidth={8}
            stroke={ 'rgba(134, 65, 244, .2)' }
        />
    )

    const onAcoesBrPress = () => {
        navigation.navigate('AcoesBr')
    }

    const onAcoesEuaPress = () => {
        navigation.navigate('AcoesEua')
    }

    const onFundosImobiliariosPress = () => {
        navigation.navigate('FundosImobiliarios')
    }

    const onCaixaPress = () => {
        navigation.navigate('Caixa')
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.menu}>
                <TouchableOpacity style={styles.btnMenu} onPress={onCaixaPress}>
                    <Text style={styles.txtBtn}>Empreendedorismo</Text>                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} onPress={onAcoesBrPress}>
                    <Text style={styles.txtBtn} >Ações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} onPress={onAcoesEuaPress}>
                    <Text style={styles.txtBtn}>Investimentos Internacionais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} onPress={onFundosImobiliariosPress}>
                    <Text style={styles.txtBtn}>Fundo Imobiliario</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} onPress={onCaixaPress}>
                    <Text style={styles.txtBtn}>Caixa</Text>                    
                </TouchableOpacity>
            </ScrollView>
            </View>
            <View style={styles.bidenContainer}>
                <Image style={styles.biden} source={require('../../../assets/biden.jpg')} />
            </View>
            <View style={styles.graphic}>
                <View style={styles.headerGraphic}>
                    <View style={styles.statsGraphic}>
                        <Text>{acoes.change_percent}</Text>
                        <Text>{acoes.price}</Text>
                    </View>
                    <View style={styles.pickerContainer}>
                        <DropdownMenu
                        style={{flex: 1}}
                        bgColor={'rgba(134, 65, 244, .2)'}
                        tintColor={'#000'}
                        activityTintColor={'rgb(66, 194, 244)'}
                        // arrowImg={}      
                        // checkImage={}   
                        // optionTextStyle={{color: '#333333'}}
                        // titleStyle={{color: '#333333'}} 
                        // maxHeight={300} 
                        handler={ (selection, row) => setAcao(acoesData[selection][row])}
                        data={acoesData}
                        >
                        </DropdownMenu>
                    </View>    
                </View>
                <LineChart
                style={{ height: 75, zIndex: -1 }}
                data={data}
                svg={{ 
                    strokeWidth: 2,
                    stroke: 'url(#gradient)', 
                }}
                contentInset={{ top: 20, bottom: 20, left: 6, right: 6 }}
                >
                    <Decorator/>
                    <Shadow/>
                    <Gradient/>
                </LineChart>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerLeft}>
                    <View style={styles.footerBox}>
                    
                    </View>
                    <View style={styles.div}>

                    </View>
                    <View style={styles.footerBox}>
                    
                    </View>
                </View>
                <View style={styles.footerRight}>
                    <View style={styles.footerStats}>

                    </View>
                </View>
            </View>
        </View>
    )
}