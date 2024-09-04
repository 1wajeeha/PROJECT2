import {  StyleSheet}from "react-native";
    // import {COLORS,SIZES  } from "../constants";
   const styles=StyleSheet.create({
    textStyle:{
        fontFamily:"bold",
        fontSize:20,
        color:"black",

    },
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:20,
    },
    appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    location:{
 fontFamily:"bold",
 fontSize:20,
 color:"black",

    },
    cartCount:{
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999
    },
    cartNumber:{
        fontFamily:"regular",
        fontWeight:"600",
        fontSize:15,
        color:"black"
    }
    
   })
   export default styles