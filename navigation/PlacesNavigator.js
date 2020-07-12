import React from 'react';  
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import PlacesListScreen, { screenOptions as placesListScreenOptions } from '../screens/PlacesListScreen';
import PlaceDetailScreen, { screenOptions as placeDetailScreenOptions } from '../screens/PlaceDetailScreen';
import NewPlaceScreen, { screenOptions as newPlaceScreenOptions } from '../screens/NewPlaceScreen';
import MapScreen, { screenOptions as mapScreenOptions } from '../screens/MapScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const PlacesStackNavigator = createStackNavigator();

const PlacesNavigator = () => {
  return(
    <PlacesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <PlacesStackNavigator.Screen
        name="Places"
        component={PlacesListScreen}
        options={placesListScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={placeDetailScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={newPlaceScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={mapScreenOptions}
      />
    </PlacesStackNavigator.Navigator>
  )
}

export default PlacesNavigator;
