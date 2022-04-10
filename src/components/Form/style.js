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


   }
});

export default styles
