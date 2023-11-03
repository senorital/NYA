import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ThemeScreen  = () => {
  // const { component: Component } = route.params;

  return (
    <View>
      {/* <Component /> */}
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

export default ThemeScreen;
//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#5C70E4', '#EF5DA8']}
//         style={styles.gradient}
//       >
//         {<Component/>}
//         {/* Your content goes here */}
//       </LinearGradient>
//     </View>
//   );
// };