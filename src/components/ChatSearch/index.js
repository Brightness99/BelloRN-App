import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import ChatSectionHeading from '../ChatSectionHeading';

const ChatSearch = () => (
  <View style={styles.chatSearchContainer}>
    <ChatSectionHeading headingText={'Cari Produk'} />
    <TextInput value="" placeholder="Cari apa aja yang bos mau!" style={styles.chatInput} underlineColorAndroid="#FFFFFF" />
  </View>
);

const styles = StyleSheet.create({
  chatSearchContainer: {
    width: '100%',
    flexDirection: 'column',
    padding: 0,
    marginBottom: 10,
  },
  chatInput: {
    alignSelf: 'center',
    paddingLeft: 15,
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    margin: 10,
  },
});

export default ChatSearch;
