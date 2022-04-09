import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){
    
const [height, setHeight] = useState(null)    
const [weight, setWeight] = useState(null)    
const [messageImc, setMessageImc] = useState("preencha peso e altura");    
const [imc, setImc] = useState(null)    
const [TextButton, SetTextButton] = useState("calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationIMC(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc('seu imc é de ')
        SetTextButton('Calcular novamente')
        return
    }
    setImc(null)
    SetTextButton('Calcular')
    setMessageImc('Preencha peso e altura')
}
    return( 
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.90"
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 89.850"
                keyboardType="numeric"
                />
                <Button title="Calcular IMC "/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
} 