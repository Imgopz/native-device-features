import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = props => {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return{
    headerTitle: 'Place Details'
  }  
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
