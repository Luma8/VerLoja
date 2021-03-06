import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes({ nome, nomeFazenda, logoFazenda, descricao, preco, botao }) {
    return (
        <SafeAreaView>
            <Text style={estilos.nome}>{nome}</Text>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagefazenda} />
                <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
            </View>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{preco}</Text>
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>
                    {botao}
                </Text>
            </TouchableOpacity>
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
    botao: {
        marginTop: 16,
        backgroundColor: '#7CECAB',
        paddingVertical: 16,
        borderRadius: 15,
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: 'center',
        lineHeight: 26,
    },
});