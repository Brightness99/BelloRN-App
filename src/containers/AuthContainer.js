import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BelloLogo from '../images/bello.png';

class AuthContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.logo}>Bello</Text>
          <Text style={styles.tagline}>Belanja Semudah Bilang Hello!</Text>
          <Image source={BelloLogo} style={{ width: '100%', height: '25%', resizeMode: 'contain', marginTop: 30, marginBottom: 30 }} />
          <TouchableOpacity onPress={Actions.home} style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 20, margin: 5, elevation: 1, width: 200 }}>
            <Text style={{ color: '#444', fontWeight: 'bold', textAlign: 'center' }}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.home} style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 20, margin: 5, elevation: 1, width: 200 }}>
            <Text style={{ color: '#444', fontWeight: 'bold', textAlign: 'center' }}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tagline: {
    fontSize: 20,
    color: '#F5F5F5',
  },
});

export default AuthContainer;
