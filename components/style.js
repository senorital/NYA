import { StyleSheet } from 'react-native';
import { windowHeight,windowWidth } from '../utils/Dimensions';
const styles = StyleSheet.create({
    text : {
        fontFamily:'Poppins',
        fontSize : 14,
        padding:2,
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
      fontSize : 12,
      fontFamily : 'Poppins',
      textAlign:'center'
      },
      view :{
        backgroundColor : '#fff',
        borderRadius : 12,
        textAlign:'center',
        alignItems :'center',
        width: windowWidth/2.15,
        height: windowHeight/4.4,
       
      },
      input: {
        height: windowHeight/25,
        width : windowWidth /1.4,
        borderWidth: 1,
        backgroundColor:'#fff',
        borderColor: '#ccc',
        paddingLeft: 10,
        borderRadius: 5,
        fontFamily :'Poppins',
        alignSelf:'center'
      },
      search :{
      backgroundColor:'#fff',
      borderRadius:12,
      color : '#7E7E7E',
      alignSelf:'center',
      margin:'auto',
      width : windowWidth /1.3,
      height: windowHeight/20
      },
      circle: {
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 150,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#F3EFE7',
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Shadow color
        shadowOffset: {
          width: 0,
          height: 4, // Adjust the height for the desired shadow effect
        },
        shadowOpacity: 2, // Shadow opacity (0 to 1)
        shadowRadius: 50, // Shadow radius (spread)
        elevation: 4, // For Android, if you're using React Native
      },
      hr : {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity : 0.3,
    marginTop:12
      },

      button: {
        alignSelf: 'center',
        justifyContent: 'center',
         padding:3,
         margin:10,
        borderRadius: 2,
        width:windowWidth/8,
        height : windowHeight/40,
        backgroundColor: '#4949C9',
      },
      sharetext: {
        textAlign:'center',
        fontSize: 10,
        letterSpacing: 0.25,
        color: 'white',
      },
  
  });
  export { styles }
