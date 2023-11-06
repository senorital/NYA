import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Container from './Container';
import Header from './Header';
import Component_Header from './Component_Header';
import SearchBar from './SearchBar';
const YogaCentre  = () => {

   return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5C70E4', '#EF5DA8']}
        style={styles.gradient}>
            <Component_Header title={"Yoga Centre"} icon={require("../assets/back.png")} />
            <SearchBar/>
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row',marginTop:50,marginLeft:5,marginRight:5}}>
        

           <Container/> 
           <Container/>

          </View>

          <View style={{flexDirection:'row',marginTop:50,marginLeft:5,marginRight:5}}>
        

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
    
  },
});

export default YogaCentre;
