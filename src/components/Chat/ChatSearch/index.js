// @flow
import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';
import SectionHeading from '../SectionHeading';

const ChatSearch = () => (
  <View style={styles.chatSearchContainer}>
    <SectionHeading headingText={'Cari Produk'} />
    <TextInput
      value=""
      placeholder="Cari apa aja yang bos mau!"
      style={styles.chatInput}
      underlineColorAndroid="#FFFFFF"
    />
  </View>
);

export default ChatSearch;
