import { TextInput } from "react-native"
import { View, Text } from "react-native-reanimated/lib/typescript/Animated"
import { useState } from "react";

const CadastroProduto = () => {
    let[nome, setNome] = useState('')
    let[descricao, setDescricao]  = useState('')

    return(
        <View>
            <Text>Nome:</Text>
            <TextInput onChangeText={setNome} value={nome}></TextInput>

            <Text>Descricao:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}></TextInput>
        </View>
    )
}