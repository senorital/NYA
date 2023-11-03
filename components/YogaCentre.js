import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Container from './Container';

const YogaCentre  = () => {

   return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5C70E4', '#EF5DA8']}
        style={styles.gradient}>
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>

           <Container/> 
           <Container/> 
          </View>
          
          </View>
        
        {/* Your content goes here */}
      </LinearGradient>
    </View>
  );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default YogaCentre;
