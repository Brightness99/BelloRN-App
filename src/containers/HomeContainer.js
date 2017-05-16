import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import cartIcon from '../images/shopping-cart.png';
import notificationIcon from '../images/bell.png';
import reminderIcon from '../images/hourglass.png';
import buyIcon from '../images/shopping-bag.png';
import analyticsIcon from '../images/bar-chart.png';
import profileIcon from '../images/user.png';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 100,
  },
  homeList: {
    flex: 1,
    width: '100%',
    height: '50%',
    padding: 0,
    flexDirection: 'row',
  },
  homeCard: {
    margin: 10,
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
    padding: 20,
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
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
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
};

class HomeContainer extends React.Component {
  componentDidMount() {
    // do something about sessions here!
  }

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

export default HomeContainer;
