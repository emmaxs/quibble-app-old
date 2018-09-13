import React from 'react';
import {
  Image,
  Picker,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LibraryScreen extends React.Component {
  static navigationOptions = {
    title: 'Choose a book...',
  };

  state = {user: ''}
  updateUser = (user) => {
      this.setState({ user: user })
   }
  render() {
    /* Hardcoded library picker */
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          /* temporary picker */
          <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Two-Point-Six" value = "TPS" />
               <Picker.Item label = "Dracula" value = "D" />
               <Picker.Item label = "Frankenstein" value = "F" />
            </Picker>
            // This shows that the state was changed
            <Text style={{fontSize: 20, alignSelf: 'center'}}> You chose: {this.state.user}</Text>
            <Text style={{fontSize: 16, alignSelf: 'center', fontStyle: 'italic', padding: 10}}>
            But actually only TPS is available
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
