import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    /* Hardcoded fake user page */
    return (
      <ScrollView style={styles.container}>
        {<Image
          style={{width: 120, height: 120, alignSelf: 'center'}}
          source={require('./avatar.jpg')}>
        </Image>}
        {<Text style={{fontSize:28, padding: 20, textAlign:'center'}}>Generic User</Text>}
        {<Text style={{fontSize:16, fontStyle: 'italic', textAlign:'center'}}>
          Image source: https://www.imdb.com/title/tt0499549/
        </Text>}
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:'#ebeef0',
    },
});
