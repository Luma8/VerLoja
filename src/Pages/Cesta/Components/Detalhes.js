import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet } from "react-native";
import logo from '../../../../assets/logo.png'

export default function Detalhes() {
    return (
        <SafeAreaView>
            <Text style={estilos.nome}>Cesta De Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagefazenda} />
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>Uma Cesta com Produtos selecionados Cuidadozamente da fazenda para a cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'normal',
        //fontFamily: "MontserratBold"
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagefazenda: {
        width: 32,
        height: 32,
        marginRight: 12,
        //fontFamily: "MontserratRegular"
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