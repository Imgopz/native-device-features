import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = props => {

  const initialLocation = props.route.params ? props.route.params.initialLocation : '';
  const readonly = props.route.params ? props.route.params.readonly : false;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  //const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  console.log(mapRegion)
  const selectLocationHandler = event => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'Choose Location!',
        'Please choose the correct location before saving.',
        [{ text: 'Okay' }]
      );
      return;
    }
    props.navigation.navigate('NewPlace', { pickedLocationMap: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    if(!readonly){
      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style={styles.headerButton} onPress={savePickedLocationHandler}>
            <Text style={styles.headerButtonText}>Save</Text>
          </TouchableOpacity>
        )
      });
    }
  }, [savePickedLocationHandler]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    }
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: "Locate"
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});
export default MapScreen;