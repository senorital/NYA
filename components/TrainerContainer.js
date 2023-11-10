import React from 'react';
import { View,Text,Image,Pressable  } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Feather';
const TrainerContainer  = () => {

   return (
     <View style={{marginLeft:5,marginRight:5,marginTop:10}}>
     <View style={[styles.view,{height:150}]}>
         <View style={[styles.circle,{bottom:117}]}>
         <Image
            style={styles.image}
            source={require("../assets/users.png")}
          />
          </View>
        <View style={{marginTop:40,alignSelf:'center'}}> 
       <Text style={styles.text}>Pallavi Srivastava</Text>
       <Text style={styles.smalltext}>pallavi12@gmail.com</Text> 

          <View style={styles.hr} /> 
          <View style={{flexDirection : 'row'}}>  
          <Pressable style={styles.button} >
      <Text style={styles.sharetext}>Public</Text>
        </Pressable>

        <Pressable style={styles.button} >
      <Text style={styles.sharetext}>Share Profile</Text>
        </Pressable>
        </View>
       </View> 
        </View>
        </View> 
  );
 };


export default TrainerContainer;
