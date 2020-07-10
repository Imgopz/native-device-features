import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlaceScreen = props => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return{
    headerTitle: 'Add New Place'
  }  
};


const styles = StyleSheet.create({});

export default NewPlaceScreen;
