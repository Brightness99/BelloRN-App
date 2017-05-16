import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';
import ChatSectionHeading from '../ChatSectionHeading';

const ChatSearch = () => (
  <View style={styles.chatSearchContainer}>
    <ChatSectionHeading headingText={'Cari Produk'} />
    <TextInput
      value=""
      placeholder="Cari apa aja yang bos mau!"
      style={styles.chatInput}
      underlineColorAndroid="#FFFFFF"
    />
  </View>
);

export default ChatSearch;
