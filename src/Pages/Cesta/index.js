import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';
import AppLoading from 'expo-app-loading';


export default function Cesta({topo, detalhes}) {

    const [fonteCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });

    if (!fonteCarregada) {
        return <AppLoading />
    }

    return (
        <SafeAreaView>
            <Topo {...topo} />
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    cesta: {//margin
        paddingVertical: 9,
        paddingHorizontal: 16,
    },
});