import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const Component_Header = ({title,icon}) => {
const navigation=useNavigation();
    return (
    
      <View style={styles.Component_Header}>
        
                <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
                 <Image  source={icon} style={styles.back}/>
                </TouchableOpacity>
          
         <Text style={[styles.title,{marginLeft: 20 }]}>{title}</Text>
      </View>
    );
}



export default Component_Header;

const styles=StyleSheet.create({
    Component_Header:{
        height:70,
        width:'100%',
        flexDirection:'row',
        elevation:0.1,
        alignItems:'center',
        paddingLeft:20,
        
        marginTop:20,
     
    },back:{
        width:20,
        height:20,
        marginTop:2,
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
       fontFamily :'Poppins'
    }
})