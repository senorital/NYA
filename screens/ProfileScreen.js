import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={require('./assets/splash.png')} // Provide your image source
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>fdgdsgdslk</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="md-heart" size={32} color="red" />
        <Ionicons name="md-star" size={32} color="gold" />
        <Ionicons name="md-mail" size={32} color="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it circular
  },
  profileName: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default ProfileScreen;
