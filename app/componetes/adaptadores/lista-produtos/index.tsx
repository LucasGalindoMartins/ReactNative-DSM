import { ScrollView, View } from "react-native";
import ItemProduto from "../item-produto";
import style from "@/app/style/default";
import Produto from '@/app/models/produto'
import React from "react";

interface PropListaProd{
  produtos: Produto[];
}

// Define o tipo para o produto
type produto = {
  id: number;
  nome: string;
  preco: number;
};

// Corrige o tipo de produtos para ser um array de objetos Produto
const ListaProdutos:React.FC<PropListaProd> = ({produtos}) => {
  return (
    <ScrollView>
      <View>
        {produtos.map((p) => (
          <ItemProduto produto={p} key={p.id} />
        ))}
      </View>
    </ScrollView>
  );
}

export default ListaProdutos;