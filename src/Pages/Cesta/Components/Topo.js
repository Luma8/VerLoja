import React from "react";
import { SafeAreaView, StatusBar, Image, Text, Dimensions, StyleSheet } from "react-native";
import topo from '../../../../assets/topo.png';


const widht = Dimensions.get('screen').width;//Ajustando Dimensão da image

export default function Topo() {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'#28B463'} />
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhe da Cesta</Text>
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
})

