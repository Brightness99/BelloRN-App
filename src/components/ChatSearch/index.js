import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const ChatSearch = () => (
  <View style={styles.chatSearchContainer}>
    <TextInput placeholder="Cari apa aja yang bos mau!" style={styles.chatInput} underlineColorAndroid="#FFFFFF" />
  </View>
);

const styles = StyleSheet.create({
  chatSearchContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  chatInput: {
    paddingLeft: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
  },
});

export default ChatSearch;
