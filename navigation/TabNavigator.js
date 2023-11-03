import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import EventScreen from '../screens/EventScreen';
import VideoScreen from '../screens/VideoScreen';

import ProfileScreen from '../screens/ProfileScreen';
import QuizScreen from '../screens/QuizScreen';
import HomeIcon from '../assets/nav-icons/home.png';
import JobIcon from '../assets/nav-icons/job.png';
import SnagIcon from '../assets/nav-icons/snaglist.png';
import CartIcon from '../assets/nav-icons/cart.png';
import UserIcon from '../assets/nav-icons/user.png';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export function ProfileStack (){
//     <Stack.Navigator>
//     <Stack.Screen name="Profile2" component={Profile} />
//       <Stack.Screen name="Update your working hours" component={WorkingHours} />
//     </Stack.Navigator>
//   }

const TabNavigator = () => {
  return (
      <Tab.Navigator
      screenOptions={{headerShown:false}}>
    <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabelStyle:{marginBottom:5},
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? HomeIcon : HomeIcon}
              style={{
                width: 20,
                height: 20,
                marginTop:10,
                // marginRight:25,
                flexDirection:'row',
                justifyContent:'space-between',
              }}
            />
          ),
          
      }}
    />
    <Tab.Screen name="Quiz" component={QuizScreen} 
        options={{
          tabBarLabelStyle:{marginBottom:5},
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? JobIcon : JobIcon}
              style={{
                width: 20,
                height: 20,
                marginTop:10,
                // marginRight:25,
                flexDirection:'row',
                justifyContent:'space-between',
              }}
            />
          ),
          
      }}
    />
    <Tab.Screen name="Videos" component={VideoScreen}
        options={{
          tabBarLabelStyle:{marginBottom:5},
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? SnagIcon : SnagIcon}
              style={{
                width: 20,
                height: 20,
                marginTop:10,
                // marginRight:25,
                flexDirection:'row',
                justifyContent:'space-between',
              }}
            />
          ),
          
      }}
    />
    <Tab.Screen name="EventScreen" component={EventScreen} 
        options={{
          tabBarLabelStyle:{marginBottom:5},
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? CartIcon : CartIcon}
              style={{
                width: 20,
                height: 20,
                marginTop:10,
                // marginRight:25,
                flexDirection:'row',
                justifyContent:'space-between',
              }}
            />
          ),
          
      }}
    />
        {/* <Tab.Screen name="WorkingHours" component={WorkingHours} 
        options={{
          tabBarLabelStyle:{marginBottom:5},
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? CartIcon : CartIcon}
              style={{
                width: 20,
                height: 20,
                marginTop:10,
                // marginRight:25,
                flexDirection:'row',
                justifyContent:'space-between',
              }}
            />
          ),
          
      }}
    /> */}
    <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarLabelStyle:{marginBottom:5},
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? UserIcon : UserIcon}
              style={{
                width: 20,
                height: 20,
                marginTop:10,
                // marginRight:25,
                flexDirection:'row',
                justifyContent:'space-between',
              }}
            />
          ),
          
      }}
    />
  </Tab.Navigator>
  );
}




export default TabNavigator;