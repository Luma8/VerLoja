import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, FlatList } from 'react-native';

export default function Item({ item: { nome, imagem } }) {

    return (
        <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />
            <Text style={estilos.nome}>{nome}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
        paddingVertical: 16,
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})