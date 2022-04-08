import React from "react";
import {TextInput, View, Text} from "react-native"

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex. 1.90"
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 89.850"
                keyboardType="numeric"
                />
            </View>
        </View>
    );
} 