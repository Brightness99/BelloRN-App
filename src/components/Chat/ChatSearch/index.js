// @flow
import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';
import SectionHeading from '../SectionHeading';

type PropTypes = {
  searchKeyword: string,
  handleChange: Function,
  handleSubmit: Function,
};

const ChatSearch = ({ searchKeyword, handleChange, handleSubmit }: PropTypes) => (
  <View style={styles.chatSearchContainer}>
    <SectionHeading headingText={'Cari Produk'} />
    <TextInput
      autoFocus
      value={searchKeyword}
      placeholder="Cari apa aja yang bos mau!"
      style={styles.chatInput}
      underlineColorAndroid="#FFFFFF"
      onChangeText={handleChange}
      onSubmitEditing={handleSubmit}
    />
  </View>
);

export default ChatSearch;
