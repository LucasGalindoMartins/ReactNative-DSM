import { StyleSheet } from "react-native";

const style = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#f5f5f5",
        },
        card:{
            width:300,
            height:200,
            backgroundColor: '#AAAAAA',
            borderRadius:10,
            elevation:5,
            shadowColor:'#000',
            shadowOffset: { width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text:{

        },

        image:{
            width: 100,
            height: 100,
            objectFit:"contain",
            resizeMode:"contain"
        }
    }

)

export default style