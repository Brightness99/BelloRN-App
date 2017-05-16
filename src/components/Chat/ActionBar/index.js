// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

const ChatActionBar = () => (
  <View style={styles.actionBar}>
    <TouchableOpacity style={styles.btnGreen} activeOpacity={0.8}>
      <Text style={styles.btnText}>OKE, KABARIN YA!</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnRed} activeOpacity={0.8}>
      <Text style={styles.btnText}>BATAL</Text>
    </TouchableOpacity>
  </View>
);

export default ChatActionBar;
