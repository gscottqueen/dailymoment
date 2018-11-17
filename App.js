
import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';

import {
  StyleSheet,
  Text,
  View,
  // Platform,
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    OneSignal.init("9bcef8fd-7a71-4144-bb50-29c4d20c9894");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Take control of your anxiety, one moment at a time.
        </Text>
        <Text style={styles.instructions}>
        Once a day reminders to take a breath, capture the moment, and own your peace of mind. ✌️
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29203a',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    margin: 25,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 30,
  },
});

export default App;