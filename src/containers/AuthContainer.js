import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BelloLogo from '../images/bello.png';
import bukalapakLogo from '../images/white_bukalapak.png'

class AuthContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.logo}>Bello</Text>
          <Text style={styles.tagline}>Belanja Semudah Bilang Hello!</Text>
          <Image source={BelloLogo} style={styles.belloImage} />
          <TouchableOpacity onPress={Actions.home} style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.home} style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnText}>Daftar</Text>
          </TouchableOpacity>
          <View style={ styles.footerSponsor }>
            <Text style={ styles.footerSponsorText }>Supported By</Text>
            <Image source={bukalapakLogo} style={ styles.bukalapakLogo } />
          </View>
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
  belloImage: {
    width: '100%',
    height: '25%',
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 30,
  },
  tagline: {
    fontSize: 20,
    color: '#F5F5F5',
  },
  btn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    margin: 5,
    elevation: 1,
    width: '70%',
  },
  btnText: {
    color: '#444',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footerSponsor: {
    height: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerSponsorText: {
    color: '#FFFFFF',
    opacity: 0.5,
    textAlign: 'center',
    alignItems: 'flex-end',
  },
  bukalapakLogo: {
    width: '30%',
    height: 50,
    resizeMode: 'contain',
  },
});

export default AuthContainer;
