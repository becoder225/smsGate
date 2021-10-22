import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {StyleApp} from './styles';

const styles = StyleApp.getStyle();
const slides = [
  {
    key: 1,
    title: 'Bienvenue / Welcome',
    text: 'Description.Say something cool finished the introduction. Show real app through navigation or simply by controlling state',
    image: require('./welcom.png'),
    //backgroundColor: '#59b2ab',
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Welcome Two',
    text: "I'm already out of descriptions Lorem ipsum bla bla bla User finished the introduction. Show real app through navigation or simply by controlling state",
    image: require('./trafic.png'),
    backgroundColor: '#febe29',
  },
];
export default class Welcome extends React.Component {
  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image source={item.image} style={styles.slideImage} />
        <Text style={styles.slideTitle}> {item.title}</Text>
        <Text style={styles.slideText}> {item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
    //this.props.navigation.navigate('About');
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={{ color:#529228}}>
       
        <Icon
          name="md-checkmark-done-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  render() {
    /* this.props.navigation.setOptions({
      headerShown: false,
    });*/
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={this._renderDoneButton}
      
      />
    );
  }
}
