import React from 'react';
import { Image, StatusBar, SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'

const widht = Dimensions.get('screen').width;//Ajustando Dimensão da image

export default function Cesta() {

    const [fonteCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    if(!fonteCarregada){
        return<View />
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'#28B463'} />
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhe da Cesta</Text>
            <View style={estilos.cesta}>
                <Text style={estilos.nome}>Cesta De Verduras</Text>
                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagefazenda} />
                    <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                <Text style={estilos.descricao}>Uma Cesta com Produtos selecionados Cuidadozamente da fazenda para a cozinha</Text>
                <Text style={estilos.preco}>R$ 40,00</Text>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    topo: {//Estilo image topo
        width: '100%',
        height: 578 / 768 * widht,
    },
    titulo: {//Estilo Titulo
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    cesta: {//margin
        paddingVertical: 9,
        paddingHorizontal: 16,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'normal',
        fontFamily: "MontserratBold"
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagefazenda: {
        width: 32,
        height: 32,
        marginRight: 12,
        fontFamily: "MontserratRegular"
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 15,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});