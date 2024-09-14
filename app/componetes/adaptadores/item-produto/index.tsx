import Produto from "@/app/models/produto";
import style from "@/app/style/default";
import { Text, View, Image, Button, Alert } from "react-native";
import React from "react"
import { ExclusiveGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition";
import axios from "axios";



interface PropProd
{
    produto: Produto,
    aoExcluir?:Function
}



const ItemProduto:React.FC<PropProd> = ({produto, aoExcluir}) =>
{
    console.log(produto);

    function Excluir(id: number) {
        let api= 'https://api-docker-2t8m.onrender.com/api/produtos'
        axios.delete(`${api}/${id}`)
        .then((resp)=>{
            aoExcluir?.call(null);
        Alert.alert('Produto excluido com sucesso');
        alert('Produto excluído com sucesso');
        })
    }

    return (
        <View style={style.card}> 
            <Text style={style.text}>{produto.nome}</Text>
            <Text style={style.text}>{produto.preco}</Text>
            <Image source={{uri:produto.foto}} 
            style={style.image} />
            <Button title="Excluir"
            onPress={()=>{Excluir(produto.id)}}/>
        </View>
    )

}

export default ItemProduto;