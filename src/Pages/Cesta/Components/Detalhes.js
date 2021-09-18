import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet } from "react-native";

export default function Detalhes({ nome, nomeFazenda, logoFazenda, descricao, preco }) {
    return (
        <SafeAreaView>
            <Text style={estilos.nome}>{ nome }</Text>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagefazenda} />
                <Text style={estilos.nomeFazenda}>{ nomeFazenda }</Text>
            </View>
            <Text style={estilos.descricao}>{ descricao }</Text>
            <Text style={estilos.preco}>{ preco }</Text>
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