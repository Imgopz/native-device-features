import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';


import HeaderButton from '../components/HeaderButton'
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/places-actions';

// switch off aiduchu mapla wait

const PlacesListScreen = props => {

  // here in state.places.places,  the FIRST places is from the combined reducer which we have mentioned 
  // in the app.js file, the SECOND places which mentioned inside the reducer.js file.
  // we are using useSelect to get the state value which is from react-redux pkg
  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);


  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        // Here we are passing parameter only to the component (KEEP IT IN MIND!!!)
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {  //this is where we are navigating to place details screen
              // and passing required parameters for header(IMPORTANT TO NOTE!!!)
              placeTitle: itemData.item.title,
              placeId: itemData.item.id
            });
          }}
        />
      )}
    />
  );
};

// Ipo puthusa oru page add pananumna, intha navigation options use pani epudi nama header title set paramon
// athla headerRight apdignra function um, anthu enna panugrathum inga export panikalam.
// ipo title and funtions ah inth screen options fuction return panramathiri setpani export panikalam
// ahta navigation options page la mention panikalam.
export const screenOptions = navData => {
    return{
      headerTitle: 'All Places',
      // below function dan anga + sign varathukum, atha amukna enga ponumnu solluthu.
      // ithuku thevayana porutkal apdinu patha (HeaderButtons and Item from react-navigation-header-buttons pakage)
      // apram header button nu nama create pani vachirukrathu import panikanum, apram enga navigate pananumo
      // athoda page name, usual ah navaData kita ella pages details uh irukum adulenthu eduthaukalam.
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add Place" iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} 
          onPress={() => {
            navData.navigation.navigate('NewPlace')
          }}
          />
        </HeaderButtons>
      )
    }
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
