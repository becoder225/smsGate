import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Welcome = () => {
  const slides = [
    {
      key: 1,
      title: 'Welcome One',
      text: 'Description.\nSay something cool',
      //image: require('./assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Welcome Two',
      text: 'Other cool stuff',
      //image: require('./assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Welcome Three',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      //image: require('./assets/3.jpg'),
      backgroundColor: '#22bcb5',
    },
  ];
  return (
    <FlatList
      data={slides}
      keyExtractor={item => item.key.toString()}
      renderItem={({item}) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  );
};

export default Welcome;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});
