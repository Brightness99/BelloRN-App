// @flow

import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const chatSectionHeading = ({ headingText }: {headingText: String}) => (
  <View style={styles.chatSectionHeading}>
    <Text style={styles.chatSectionText}>
      { headingText }
    </Text>
  </View>
);

export default chatSectionHeading;
