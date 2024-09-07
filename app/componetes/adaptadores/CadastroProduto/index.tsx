import { Button, TextInput } from "react-native"
import { View, Text } from "react-native-reanimated/lib/typescript/Animated"
import { useState } from "react";
import Produto from "@/app/models/produto";
import axios from "axios";

const CadastroProduto = () => {
    let[nome, setNome] = useState('')
    let[descricao, setDescricao]  = useState('')
    let[preco,setPreco] = useState(0);

    return(
        <View>
            <Text>Nome:</Text>
            <TextInput onChangeText={setNome} value={nome}></TextInput>

            <Text>Descricao:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}></TextInput>

            <Text>Preço:</Text>
            <TextInput onChangeText={
                (v)=> 
            {
                setPreco
                (
                isNaN(parseFloat(v))?0:parseFloat(v)
                );

            } 
        }
            inputMode="numeric" value={preco.toString()}/>

            <Button title="Cadastrar" onPress={Cadastrar}/>
        </View>
    )

    function Cadastrar(){
        let produto: Produto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api,produto)
    }
}

export default CadastroProduto