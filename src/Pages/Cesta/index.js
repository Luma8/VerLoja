import React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';
import AppLoading from 'expo-app-loading';
import Item from './Components/Item';


export default function Cesta({ topo, detalhes, itens }) {

    const [fonteCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    if (!fonteCarregada) {
        return <AppLoading />
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={itens.lista}
                    renderItem={Item}
                    keyExtractor={({ nome }) => nome}
                    style={estilos.lista}
                    ListHeaderComponent={() => {
                        return (
                            <>
                                <Topo {...topo} />
                                <View style={estilos.cesta}>
                                    <Detalhes {...detalhes} />
                                    <Text style={estilos.titulo}>{ itens.titulo }</Text>
                                </View>
                            </>
                        );
                    }}
                />
            </SafeAreaView>
        </>
    );
}

const estilos = StyleSheet.create({
    cesta: {//margin
        paddingVertical: 9,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32,
        fontSize: 20,
    },
    lista: {
        paddingHorizontal: 16,
    }
});