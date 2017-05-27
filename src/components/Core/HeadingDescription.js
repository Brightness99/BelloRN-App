import React from 'react';
import { Text, View } from 'react-native';

const HeadingDescription = ({ text }) => (
  <View>
    <Text style={{ color: '#444444' }}>
      { text }
    </Text>
  </View>
);

export default HeadingDescription;
