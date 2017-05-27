import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as colors from '../constants/colors';
import cartIcon from '../images/shopping-cart.png';
import notificationIcon from '../images/bell.png';
import reminderIcon from '../images/hourglass.png';
import buyIcon from '../images/shopping-bag.png';
import analyticsIcon from '../images/bar-chart.png';
import profileIcon from '../images/user.png';

import ActionSuccessInfo from '../components/Core/ActionSuccessInfo';

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
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
    width: '45%',
    height: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
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
    color: colors.darkGrey,
  },
};

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successInfo: false,
      successInfoMessage: 'Sukses Login! Selamat Datang',
    };

    this.renderSuccessInfo = this.renderSuccessInfo.bind(this);
  }

  componentDidMount() {
    // setTimeout(() => this.setState({ successInfo: true }), 300);
    // setTimeout(() => this.setState({ successInfo: false }), 2000);
  }

  renderSuccessInfo() {
    const { successInfo, successInfoMessage } = this.state;

    if (successInfo) {
      return (
        <ActionSuccessInfo label={successInfoMessage} />
      );
    }
    return null;
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
          <TouchableOpacity style={styles.homeCard} onPress={Actions.request} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={reminderIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>REQUEST</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.homeList}>
          <TouchableOpacity
            style={styles.homeCard}
            onPress={Actions.notification}
            activeOpacity={0.8}
          >
            <View style={styles.homeCardContent}>
              <Image source={notificationIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>NOTIFIKASI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeCard} onPress={Actions.profile} activeOpacity={0.8}>
            <View style={styles.homeCardContent}>
              <Image source={profileIcon} style={styles.homeIcon} />
              <Text style={styles.homeTitle}>PROFIL</Text>
            </View>
          </TouchableOpacity>
        </View>
        { this.renderSuccessInfo() }
      </View>
    );
  }
}

export default HomeContainer;
