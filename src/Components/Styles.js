import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    seperator: {
   flex:1,
      flexDirection: "row",
      marginLeft:10,
      marginRight:10,
      borderWidth:1,
      borderRadius:15
    },
    Margin:{
      marginTop:30
    },
    Details: {
        flexDirection: "row",
        marginLeft:10,
        marginTop:50,
      },
      TextStyle:{
      fontSize:18,
      color:'black',
      marginTop:20,
      marginBottom:10,
      marginLeft:10,
      fontWeight:"bold",
      marginRight:30
    },
  Title:{
    fontSize:13,
    color:'black',
    marginTop:20,
    marginBottom:10,
    marginLeft:10,
    fontWeight:"bold",
    marginRight:10,
  },
  Mag:{
    marginLeft:10,
    fontSize:15,
    fontWeight:"bold",
    color:'green',
    marginBottom:20,
  },
  TitleView:{flex:1
  },IconView:{
   alignItems:'flex-end',
   marginRight:25},
   Error:{
     color:'red',
     marginLeft:90,
     fontSize:20,
   },
  
  Arrow:{
    marginTop:27,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    alignContent:'flex-end',
    color:'black',
    
  }})
  export default styles;