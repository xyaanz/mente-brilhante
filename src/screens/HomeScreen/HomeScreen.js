import React, {useEffect, useState} from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import api from '../../services/api'
import { LineChart, Path } from 'react-native-svg-charts'
import { Circle, Defs, Stop, LinearGradient } from 'react-native-svg'
import DropdownMenu from 'react-native-dropdown-menu';

export default function HomeScreen({props, navigation}) {

 const [bolsaPoints, setBolsaPoints] = useState([])
 const [bolsaVariation, setBolsaVariation] = useState([])
 const [bolsa, setBolsa] = useState('IBOVESPA')
 const [bidi, setBidi] = useState([])
 const [bidiVariation, setBidiVariation] = useState([])
 const [itsa, setItsa] = useState([])
 const [itsaVariation, setItsaVariation] = useState([])
 const [mglu, setMglu] = useState([])
 const [mgluVariation, setMgluVariation] = useState([])
 const [mrve, setMrve] = useState([])
 const [mrveVariation, setMrveVariation] = useState([])

 useEffect(() => {
 async function getItems() {
 try {
 const { data } = await api.get("quotations?key=2282e783")
 if (bolsa === 'IBOVESPA') {
 setBolsaPoints(data.results.stocks.IBOVESPA.points)
 setBolsaVariation(data.results.stocks.IBOVESPA.variation)
 } else if (bolsa === 'NASDAQ') {
 setBolsaPoints(data.results.stocks.NASDAQ.points)
 setBolsaVariation(data.results.stocks.NASDAQ.variation)
 }
 } catch (error) {
 alert('Ocorreu um erro ao buscar os items')
 }
}
getItems()
}, [bolsa])

useEffect(() => {
    async function getItems() {
    const { data } = await api.get('stock_price?key=2282e783&symbol=bidi4')
    try {
    setBidi(data.results.BIDI4.price)
    setBidiVariation(data.results.BIDI4.change_percent)
    } catch (error) {
    alert(error)
    }
    }
    getItems()
    }, [])
  
useEffect(() => {
    async function getItems() {
            const { data } = await api.get('stock_price?key=2282e783&symbol=itsa4')
        try {
            setItsa(data.results.ITSA4.price)
            setItsaVariation(data.results.ITSA4.change_percent)
        } catch (error) {
            alert(error)
        }
    }
    getItems()
}, [])

useEffect(() => {
    async function getItems() {
            const { data } = await api.get('stock_price?key=2282e783&symbol=mglu3')
        try {
             setMglu(data.results.MGLU3.price)
            setMgluVariation(data.results.MGLU3.change_percent)
        } catch (error) {
            alert(error)
        }
    }
    getItems()
}, [])

useEffect(() => {
    async function getItems() {
            const { data } = await api.get('stock_price?key=2282e783&symbol=mrve3')
        try {
            setMrve(data.results.MRVE3.price)
            setMrveVariation(data.results.MRVE3.change_percent)
        } catch (error) {
            alert(error)
        }
    }
    getItems()
}, [])

    const data = [ 1.2, 1.6, 0.0, 0.9, bolsaVariation]
    const acoesData = [["IBOVESPA", "NASDAQ"]];

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
            stroke={ 'rgba(22, 105, 255, 0.2)' }
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
            <Text style={styles.menuArrows}>{"<"}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        style={styles.menu}>
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
        <Text style={styles.menuArrows}>{">"}</Text>
        </View>
        <View style={styles.bidenContainer}>
            <Image style={styles.biden} source={require('../../../assets/biden.jpg')} />
        </View>
        <View style={styles.graphic}>
            <View style={styles.headerGraphic}>
                <View style={styles.statsGraphic}>
                    <View style={styles.bolsaPoints}>
                        <Text style={styles.txtPoints}>PONTOS</Text>
                        <Text style={styles.nmbPoints}>{bolsaPoints}</Text>
                    </View>
                    <View style={styles.bolsaVariationContainer}>
                        <View style={styles.bolsaVariation}>
                            <Text style={styles.variation}>{bolsaVariation}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pickerContainer}>
                    <DropdownMenu
                        style={{flex: 1}}
                        bgColor={'rgba(22, 105, 255, 0.9)'}
                        tintColor={'#FFF'}
                        activityTintColor={'#FFF'}
                        // arrowImg={}
                        // checkImage={}
                        //optionTextStyle={{color: '#333333'}}
                        //titleStyle={{color: '#333333'}}
                        // maxHeight={300}
                        handler={ (selection, row) => setBolsa(acoesData[selection][row])}
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
                    <Image style={styles.imageFooter} source={require('../../../assets/xp.png')} />
                </View>
                <View style={styles.div}>
                </View>
                <View style={styles.footerBox}>
                    <Image style={styles.imageFooter} source={require('../../../assets/xp.png')} />
            </View>
        </View>
        <View style={styles.footerRight}>
            <View style={styles.footerStats}>
                <View style={styles.statsDesc}>
                    <Text style={styles.titleDesc}>NOME</Text>
                    <Text style={styles.titleDesc}>PREÇO</Text>
                    <Text style={styles.titleDesc}>VARIAÇÃO</Text>
                </View>
                <View style={styles.statsDesc}>
                    <Text style={styles.statsDescSym}>BIDI4</Text>
                    <Text style={styles.statsDescPrc}>{bidi}</Text>
                    <Text style={styles.statsDescVrt}>{bidiVariation}</Text>
                </View>
                <View style={styles.statsDesc}>
                    <Text style={styles.statsDescSym}>ITSA4</Text>
                    <Text style={styles.statsDescPrc}>{itsa}</Text>
                    <Text style={styles.statsDescVrt}>{itsaVariation}</Text>
                </View>
                <View style={styles.statsDesc}>
                    <Text style={styles.statsDescSym}>MGLU3</Text>
                    <Text style={styles.statsDescPrc}>{mglu}</Text>
                    <Text style={styles.statsDescVrt}>{mgluVariation}</Text>
                </View> 
                <View style={styles.statsDesc}>
                    <Text style={styles.statsDescSym}>MRVE3</Text>
                    <Text style={styles.statsDescPrc}>{mrve}</Text>
                    <Text style={styles.statsDescVrt}>{mrveVariation}</Text>
                </View>
            </View>
        </View>
    </View>
 </View>
 )
}
