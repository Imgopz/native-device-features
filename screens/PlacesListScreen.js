import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'

const PlacesListScreen = props => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
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
