import React from 'react';
import { View,Text,Image,Pressable  } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Feather';
const Container  = () => {

   return (
     <View style={{marginLeft:5,marginRight:5,marginTop:10}}>
     <View style={styles.view}>
         <View style={styles.circle}>
         <Image
            style={styles.image}
            source={require("../assets/yoga.png")}
          />
          </View>
        <View style={{marginTop:40}}> 
       <Text style={styles.text}>Manapuram Yoga Center</Text>
       <Text style={styles.smalltext}>Manapuram Yoga Center</Text> 
       <Text style={[styles.vsmalltext,{textAlign:'center'}]}>Delhi, Delhi, India  
    
           <Icon name="map-pin" size={12} color="black" />
          
          </Text> 
          <View style={styles.hr} /> 
          <View>  
          <Pressable style={styles.button} >
      <Text style={styles.sharetext}>Share</Text>
        </Pressable>
        </View>
       </View> 
        </View>
        </View> 
  );
 };


export default Container;
