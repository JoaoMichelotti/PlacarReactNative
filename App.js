import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Placar from "./src/components/Placar";

export default function App() { 
    return (
        <View style={estilo.tela}>
            <StatusBar barStyle="light-content" backgroundColor="#03001C"/>

            <Placar titulo="HOME" />
            <Placar titulo="GUEST" />
            
        </View>
    );

}

const estilo = StyleSheet.create({

  tela: {
    backgroundColor: "#03001C",
    flex: 1,
  }

})