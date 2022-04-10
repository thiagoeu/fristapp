import React, {useState} from "react";
import {TextInput, View, Text, TouchableOpacity} from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";


 
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
        setMessageImc('Seu IMC é de: ')
        SetTextButton('Calcular Novamente')
        return
    }
    setImc(null)
    SetTextButton('Calcular')
    setMessageImc('Preencha Peso e Altura')
}
    return( 
        <View style={styles.formContex}>
            <View style={styles.form} >
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.90"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 89.850"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => validationIMC()}
                >
                <Text style={styles.textButtonCalculator}>{TextButton}</Text>    
                </TouchableOpacity>                
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
} 