import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const FooterActionButton = ({ text }) => (
  <View style={styles.actionBar}>
    <TouchableOpacity style={styles.btnGreen} activeOpacity={0.8}>
      <Text style={styles.btnText}>{ text }</Text>
    </TouchableOpacity>
  </View>
);

export default FooterActionButton;
