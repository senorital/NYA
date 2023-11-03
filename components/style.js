import { StyleSheet } from 'react-native';
import { windowHeight,windowWidth } from '../utils/Dimensions';
const styles = StyleSheet.create({
    text : {
        fontFamily:'Poppins',
        fontSize : 15,
        padding:4,
        textAlign:'center',
        alignItems:'center'
    
      },
      smalltext :{
      color:'#5F5F5F',
      fontFamily :'Poppins',
      fontSize:12
      },
      image :{
        width: 70,  // Adjust the width and height as needed
        height: 70,
      },
      vsmalltext : {
      fontSize : 10,
      fontFamily : 'Poppins',
      textAlign:'center'
      },
      view :{
        backgroundColor : '#fff',
        borderRadius : 12,
        textAlign:'center',
        alignItems :'center',
        width: windowWidth/2.1,
        height: windowHeight/4.5,
        marginLeft : 5,marginRight:5
      },
      circle: {
        width: 80,
        height: 80,
        position:'absolute',
        bottom:140,
        marginBottom:0,
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#F3EFE7', // Change the color as needed
      },
      hr : {
        
      }
  
  });
  export { styles }
