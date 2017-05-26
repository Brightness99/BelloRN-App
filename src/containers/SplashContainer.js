import React from 'react';
import { AsyncStorage, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { saveUserdata } from '../actions/userdata';

import belloIcon from '../images/bello.png';

class SplashContainer extends React.Component {
  componentDidMount = () => {
    this.loadLoggedUserData().done();
  }

  loadLoggedUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Bello:user');
      if (value !== null) {
        const data = JSON.parse(value);
        this.props.saveUserdata(data);
        Actions.home();
      } else {
        setTimeout(() => Actions.login(), 500);
      }
    } catch (error) {
      alert(`Error Retrieving Data : ${error}`);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#3498DB', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={belloIcon} style={{ width: 150, height: 150, alignSelf: 'center' }} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveUserdata: data => dispatch(saveUserdata(data)),
});

export default connect(null, mapDispatchToProps)(SplashContainer);
