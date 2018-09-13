import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SampleScreen extends React.Component {
  static navigationOptions = {
    title: 'Daily Sample',
  };

  render() {
    /* Hardcoded sample scroll page */
    return (
      <ScrollView style={styles.container}>
        {<Text style={{fontSize:28}}>Two-Point Six</Text>}
        {<Text style={{fontSize:20, fontStyle: 'italic', padding: 5}}>by Emma Xin</Text>}
        {<Text style={{fontSize:16, padding: 10}}>“Five thousand credits, do I hear five thousand credits for this beautiful generator?”</Text>}
        {<Text style={{fontSize:16, padding: 10}}>The auctioneer ran his hand across the blue-ribbed frame. Fast talk hung from his untrustworthy mustache. “Folks, this is the good stuff. Steel casing, just short of 200 pounds. If I didn’t have a daughter waiting for me in the Greenhouse, I’d be bidding along with you.”</Text>}
        {<Text style={{fontSize:16, padding: 10}}>The crowd ate it up. White placards slowly began to rise. Nothing sells like a sob story, thought Rhea, her tiny frame gliding through the audience of misfits. She was disappointed that the Right Hand would send top agents on such a low-level case. If everything went according to schedule, she could have this auction wrapped up in fifteen minutes.
</Text>}
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});
