import axios from "axios";
import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useEffect } from "react";
import CadastroProduto from "./componetes/adaptadores/CadastroProduto";
import ListaProdutos from "./componetes/adaptadores/lista-produtos";
import style from "./style/default";
import { useRouter } from "expo-router";
import { useFocusEffect } from "expo-router";

export default function Index()
{
  const router = useRouter();

  useFocusEffect(()=>{
    carregarProdutos();
 })

  let [contador, setContador] = useState(0);
  let[produtos, setProdutos] = useState([]);

  useEffect(()=>{
    carregarProdutos();
  },[])

  function carregarProdutos(){
    axios.get('https://app-api-tapwm.onrender.com/api/produtos').then((resp)=>{

    })
  }
  return (
    <View style={style.container}
    >
     <ListaProdutos produtos={produtos} aoAtualizar={carregarProdutos}></ListaProdutos>
    <Button title='Cadastrar'
    onPress={()=>{telaCadastro()}}>
    </Button>
      
    </View>
  );

  function telaCadastro(){
    router.push('./telas/cadastro');
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