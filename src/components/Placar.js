import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import estilo from "../styles/Placar";

export default function Placar(props) { 

    const [pontuacao, setPontuacao] = useState(0);

    return (
        <View style={estilo.placar}>
            <Text style={estilo.placarTitulo}>{props.titulo}</Text>
            <Text style={estilo.placarPontuacao}>{pontuacao}</Text>

            <View style={estilo.placarCampo}>
                <Pressable onPress={() => setPontuacao(pontuacao + 1)}>
                    <Text style={estilo.placarBotao}>+</Text>
                </Pressable>
                <Pressable onPress={() => setPontuacao(pontuacao - 1)}>
                    <Text style={estilo.placarBotao}>-</Text>
                </Pressable>
            </View>



        </View>
    );

}