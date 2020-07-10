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
    // this is how we need to extract data
    headerTitle: navData.route.params.placeTitle
  }  
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
