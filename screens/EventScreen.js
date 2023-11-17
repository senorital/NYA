// QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { styles } from '../components/style';
import { LinearGradient } from 'expo-linear-gradient';
import Component_Header from '../components/Component_Header';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const EventContainer = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
    style={[eventStyles.container]}
    onPress={() => setIsPressed(!isPressed)}
  >
    <Image
       source={require("../assets/event.png")}
      style={eventStyles.image}
    />
    <Text style={eventStyles.heading}>Yoga Conference</Text>
    <View style={eventStyles.locationContainer}>
      <Icon name="map-pin" size={15} color="#C3C2CC" />
      <Text style={eventStyles.locationText}>68 Ashoka road, New Delhi</Text>
    </View>
  </TouchableOpacity>
);
};



 
const EventScreen = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
  ];

  const AllEventContainer = () => {
    return (
      <TouchableOpacity
        style={[eventStyles.box]}
        onPress={() => setIsPressed(!isPressed)}>
        <View style={{flexDirection : 'row',flex:1}}>   
        <Image source={require("../assets/jazz.png")}style={eventStyles.eventimage}/>
        <Text style={[eventStyles.heading,{marginLeft:12,flex:2,alignItems:'center',justifyContent:'space-between'}]}>A virtual evening of smooth jazz</Text>
        <View style={eventStyles.locationContainer}>
        </View>      
        </View>

      </TouchableOpacity>
    
    );
    };

  return (
         <View style={styles.container}>
       <LinearGradient
        colors={['#5C70E4', '#EF5DA8']}
        style={styles.gradient}>
            <Component_Header title={"Yoga Events"} icon={require("../assets/back.png")} />
            <SearchBar/>
            <View style={{flexDirection:'row',justifyContent: 'space-between',marginLeft:30,marginRight:30}}>
          <Text style={[styles.Text,{textAlign:'left',color:'#E9E7F9',fontSize:18}]}>Upcoming Post</Text>
        <Text style={{ fontFamily : 'Poppins',fontSize:13,marginTop:30,textAlign:'center',color:'#E9E7F9'}}>See all  <Icon name="chevron-right" size={15} color="#C3C2CC" /></Text>
        </View>     
        <EventContainer/>
        <View style={{flexDirection:'row',justifyContent: 'space-between',marginLeft:30,marginRight:30}}>
          <Text style={[styles.Text,{textAlign:'left',color:'#E9E7F9',fontSize:18}]}>All Events</Text>
        <Text style={{ fontFamily : 'Poppins',fontSize:13,marginTop:30,textAlign:'center',color:'#E9E7F9'}}>See all  <Icon name="chevron-right" size={15} color="#C3C2CC" /></Text>
        </View> 
        <AllEventContainer/>   
       </LinearGradient>
  
          </View>  
   

  );


  
 
};


const eventStyles = StyleSheet.create({
  box :{
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 10,
    margin:14,
    height: windowHeight/6.5,
    width:windowWidth/1.1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

  },
   eventimage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },

  container: {
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 10,
    margin:12,
    height: windowHeight/3,
    width:windowWidth/1.7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 210,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,

    fontFamily:'Poppins-Medium',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily :'Poppins-SemiBold',
    color:'#C3C2CC'
  },
});

export default EventScreen;
