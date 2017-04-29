import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const chatSectionHeading = ({headingText}) => (
  <View style={styles.chatSectionHeading}>
    <Text style={styles.chatSectionText}>
      { headingText }
    </Text>
  </View>
);


const styles = StyleSheet.create({
  chatSectionHeading: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  chatSectionText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default chatSectionHeading;
