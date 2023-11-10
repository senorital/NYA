import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./navigation/TabNavigator";
import ProfileScreen from "./screens/ProfileScreen";
import loadCustomFonts from './components/useFonts';
import EventScreen from "./screens/EventScreen";
import QuizScreen from "./screens/QuizScreen";
import VideoScreen from "./screens/VideoScreen";
import ThemeScreen from "./screens/ThemeScreen";
import YogaCentre from "./components/YogaCentre";
import YogaTrainer from "./components/YogaTrainer";
import YogaNews from "./components/YogaNews";
const Stack = createNativeStackNavigator();
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// export default function App (){
function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await loadCustomFonts();
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Render a loading screen or component while fonts are loading
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      
         <Stack.Screen
          name="EventScreen"
          component={EventScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Videos"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen
          }
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ThemeScreen"
          component={ThemeScreen
          } 
          options={{ headerShown: false }}


        />
        <Stack.Screen
          name="YogaCentre"
          component={YogaCentre} 
          options={{ headerShown: false }}


        />

        <Stack.Screen
          name="YogaTrainer"
          component={YogaTrainer} 
          options={{ headerShown: false }}


        />


        <Stack.Screen
          name="YogaNews"
          component={YogaNews} 
          options={{ headerShown: false }}


        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    // <Provider store={store}>
      <App />
    // </Provider>
  );
};
