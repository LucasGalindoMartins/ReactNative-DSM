import axios from "axios";
import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useEffect } from "react";

const produtos = [
  {id: 1, nome: "Coca-cola", preco: 12.5},
  {id: 2, nome: "Pepsi", preco: 8.88},
  {id: 3, nome: "Fanta", preco: 8.95},
  {id: 4, nome: "Guaraná", preco: 6.5},
];

export default function Index()
{
  let [contador, setContador] = useState(0);
  let[produtos, setProdutos] = useState(1);

  useEffect(()=>{
    carregarProdutos();
  },[])

  function carregarProdutos(){
    axios.get('https://app-api-tapwm.onrender.com/api/produtos').then((resp)=>{

    })
  }
  return (
    <View style={main.view}>
      {produtos.map((p)=> (
        <View key={p.id}>
        <Text style =  {main.titulo}>{p.nome} </Text>
        <Text>{p.preco}</Text>
        </View>
      ))}
      <Button title= {contador.toString()} onPress={()=>{clicarBotao()}}></Button>
    </View>
  );

  function clicarBotao(){
    setContador(contador+1);
  }
}


const main=StyleSheet.create(
{
  view:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#482973"
  },
  text:
  {
    color: "#eb34d8",
    fontSize: 50,
    fontWeight: "bold"
  },
  titulo:{
    color:'#FFFFFF',
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"  
  }
});