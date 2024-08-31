import Produto from "@/app/models/produto";
import style from "@/app/style/default";
import { Text, View, Image } from "react-native";
import React from "react"



interface PropProd
{
    produto: Produto
}



const ItemProduto:React.FC<PropProd> = ({produto}) =>
{
    console.log(produto);

    return (
        <View style={style.card}> 
            <Text style={style.text}>{produto.nome}</Text>
            <Text style={style.text}>{produto.preco}</Text>
            <Image source={{uri:produto.foto}} 
            style={style.image} />
        </View>
    )

}

export default ItemProduto;