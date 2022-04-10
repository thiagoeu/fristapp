import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   formContex:{
       width:"100%",
       height:"100%",
       bottom:0,
       backgroundColor:"#ffffff",
       alignItems:"center",
       marginTop:30,
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
   },
   form:{
       width: "100%",
       height: "auto",
       marginTop: 30,
       padding: 10,

   },
   formLabel:{
       color: "#000000",
       fontSize: 18,
       paddingLeft: 20,   
   },
   input:{
       width: "90%",
       borderRadius: 50,
       backgroundColor: "#ffffff",
       height: 40,
       margin:12,
       paddingLeft: 10,
   },

   textButtonCalculator:{
       fontSize:  20,
       color: "#ffffff",

   },
   buttonCalculator:{
       borderRadius: 50,
       alignItems: "center",
       justifyContent: "center",
       width: "90%",
       backgroundColor: "#cc0000",
       paddingTop: 14,
       paddingBottom: 14,
       marginLeft: 12,
       marginTop: 30, 

   }
});

export default styles
