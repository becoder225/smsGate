import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import SmsListener from 'react-native-android-sms-listener';
import SmsAndroid from 'react-native-get-sms-android';
import NetInfo from '@react-native-community/netinfo';

export default class Sms extends React.Component {
  constructor() {
    super();
    this.SMSReadSubscription = {};
    let subscribe = null;
    NetInfo.addEventListener(state => {
      this.subscribe = state;
    });
  }

  async requestReadSmsPermission() {
    try {
      var granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'Auto Verification OTP',
          message: 'need access to read sms, to verify OTP',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          {
            title: 'Receive SMS',
            message: 'Need access to receive sms, to verify OTP',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          SmsListener.addListener(message => {
            alert(JSON.stringify(message));
            console.log(message);
            //message.body will have the message.
            //message.originatingAddress will be the address.
          });
        } else {
          alert('RECEIVE_SMS permissions denied');
          console.log('RECEIVE_SMS permissions denied');
        }
      } else {
        alert('READ_SMS permissions denied');
        console.log('READ_SMS permissions denied');
      }
    } catch (err) {
      alert(err);
    }
  }

  componentDidMount() {
    this.requestReadSmsPermission();
  }

  render() {
   
    return !this.subscribe.isWifiEnabled ? (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
