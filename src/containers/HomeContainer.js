import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import cartIcon from '../images/shopping-cart.png';
import notificationIcon from '../images/bell.png';
import reminderIcon from '../images/hourglass.png';
import buyIcon from '../images/shopping-bag.png';
import analyticsIcon from '../images/bar-chart.png';
import profileIcon from '../images/user.png';

class HomeContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeList}>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.chat} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={buyIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>BELI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.cart} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={cartIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>KERANJANG</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.homeList}>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.analytics} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={analyticsIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>ANALISA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.product} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={profileIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>PROFIL</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.homeList}>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.product} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={notificationIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>NOTIFIKASI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.product} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={reminderIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>REMINDER</Text>
            </View>
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
    padding: 20,
    paddingTop: 100,
  },
  homeList: {
    flex: 1,
    width: '100%',
    padding: 0,
    flexDirection: 'row',
  },
  homeCard: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeCardContent: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    margin: 5,
  },
  homeTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  homePrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#EB9532',
  },
  homeSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  homeDescription: {
    color: '#666666',
  },
});

export default HomeContainer;
