import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'lightpink',
    
},
headeingtext:{
    flex:0.1,
    marginTop:40,
    textAlign:'center',
    fontSize:50,
    fontFamily:'Times',
    fontWeight:'bold',
    
},
button:{  
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'30%',  
    marginBottom:15,
    backgroundColor:'red',
    borderRadius:50,
    borderColor:'black',
    borderWidth:4,
    height:60,
    width:170,
    
},
buttontext:{
    textAlign:'center',
    color:'white',
    fontSize:25,
    fontFamily:'Times',
    fontWeight:'bold',
    width:150,
},

inputFeild:{

   backgroundColor:'cyan',
    height:100,
    width:'90%',
    marginLeft:'5%',
    marginTop:20,
    borderRadius:10,
    borderWidth:2

},
midle:{
    flex:0.9,
    backgroundColor:'#FFF3E0',
    borderWidth:5,
    borderColor:'#E91E63'
},
textfeild:{
    marginLeft:15,
    marginRight:15,
    marginTop:20,
    height:56,
    fontSize:30,
    borderWidth:3,
    borderColor:'darkgrey',
    borderRadius:5,
    fontFamily:'Times'

},
deldata:{
    backgroundColor:'yellow',
    width:"67%",
    marginTop:20,
    marginLeft:'5%',
    flexDirection:'row',
    borderRadius:5,
    borderWidth:2
},
delback:{
    backgroundColor:'red',
    borderRadius:10,
    borderColor:'black',
    borderWidth:3,
    justifyContent:'center'
},
deltext:{
    color:'white',
    fontWeight:'bold',
    fontFamily:'Times',
    fontSize:15
},
newbase:{
    width:"100%"
},
outtext:{
    fontSize:20,
    

}

   
});

export { styles }