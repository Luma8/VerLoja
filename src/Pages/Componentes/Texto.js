import React from "react";
import { Text } from "react-native";

export default function Texto({ children }) {
    return (
        <Text style={estilos.texto}>{children}</Text>
    );
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    }
});