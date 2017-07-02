import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
componentWillMount() {
  const config = {
    apiKey: 'AIzaSyBEx-HK_dZfF2LvSfNreM3f_bY6z0Elq1M',
    authDomain: 'manager-883c1.firebaseapp.com',
    databaseURL: 'https://manager-883c1.firebaseio.com',
    projectId: 'manager-883c1',
    storageBucket: 'manager-883c1.appspot.com',
    messagingSenderId: '945207180756'
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View>
          <Text>
          Hello Dude!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
