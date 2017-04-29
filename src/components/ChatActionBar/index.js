import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

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

const styles = StyleSheet.create({
  actionBar: {
    backgroundColor: '#2574A9',
    backgroundColor: '#FFFFFF',
    borderTopColor: '#3498DB',
    borderTopWidth: 5,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGreen: {
    flex: 1,
    backgroundColor: '#16A085',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnRed: {
    flex: 1,
    backgroundColor: '#C0392B',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnOrange: {
    flex: 1,
    backgroundColor: '#EB9532',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ChatActionBar;
