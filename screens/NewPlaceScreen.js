import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';


import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';



const NewPlaceScreen = props => {

  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    // you could add validation
    setTitleValue(text);
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
};

  // here we are using useDispatch as dispatch function which calls the addPlace action, which ultimately 
  // dispatch the addPlace action to (useDispatch will fire the action)
  // reducer via redux thunk which inturn execute the case which is mentioned
  // in the places-reducers.js file, this action value is imported from places-actions.js file.
  // action takes the modified data here its TITLE of the filed and sends to actions file, 
  // and returns a action constant, and returning the modified value
  // which will be dispatched to the reducer
  // reducer check the actions value, and executes correspoding action block
  // in that acions block we told reducer to create a new place object using modles, and 
  // get the current state of places, and concatenate and return new places object to the state (IT WILL UPDATE THE STATE)
  // then goBack to main screen, where we have used useSelector hooks, which will be triggered,
  // and all the places from the state will be taken from the store and places will be listed.
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <LocationPicker navigation={props.navigation}  />
        <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

// inga nama entha page kum pola adunala just inga end function um return panala, just title dan panrom.
export const screenOptions = {
    headerTitle: 'Add New Place'
};


const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});


export default NewPlaceScreen;
