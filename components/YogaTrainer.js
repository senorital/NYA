import React, { useState} from 'react';
import { Text,View,StyleSheet } from 'react-native';
import Header from './Header';


const YogaTrainer = () => {
 
   
    return (
    <View style={styles.container}>
         <Header title={"Yoga Trainers"} icon={require("../assets/back.png")} />
         
       
    </View>
      
       
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      // padding:16,
    },
   
  });

export default YogaTrainer;

