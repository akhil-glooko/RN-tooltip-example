/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ToolTip from 'react-native-tooltip';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';

class AwesomeProject extends Component {
  handleCopyPress() {
    AlertIOS.alert(`Copy has been pressed!`);
  }

  handleOtherPress() {
    AlertIOS.alert(`Other has been pressed!`);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ToolTip
          actions={[
            {text: 'Copy', onPress: this.handleCopyPress },
            {text: 'Other', onPress: this.handleOtherPress }
          ]}
          underlayColor={'blue'}
          style={styles.selectedName}
        >
          <Text style={styles.welcome}>
            Press Here.
          </Text>
        </ToolTip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
