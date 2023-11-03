import React from 'react';
import { View,Text,Image } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Feather';
const Container  = () => {

   return (
     <View style={{flexDirection:'row'}}>
     <View style={styles.view}>
         <View style={styles.circle}>
         <Image
            style={styles.image}
            source={require("../assets/yoga.png")}
          />
          </View>
        <View style={{marginTop:30}}> 
       <Text style={styles.text}>Manapuram Yoga Center</Text>
       <Text style={styles.smalltext}>Manapuram Yoga Center</Text> 
       <Text style={[styles.vsmalltext,{marginLeft:21,textAlign:'center'}]}>Delhi, Delhi, India  
    
           <Icon name="map-pin" size={12} color="black"/>
       
   
          
          </Text> 

       </View> 
        </View>
        </View> 
  );
 };


export default Container;
