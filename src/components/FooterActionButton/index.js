import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const FooterActionButton = () => (
  <View style={styles.actionBar}>
    <TouchableOpacity style={styles.btnGreen} activeOpacity={0.8}>
      <Text style={styles.btnText}>CHECKOUT</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  actionBar: {
    backgroundColor: '#16A085',
    borderTopColor: '#3498DB',
    borderTopWidth: 5,
    padding: 0,
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

export default FooterActionButton;
