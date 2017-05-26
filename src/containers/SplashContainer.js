import React from 'react';
import { AsyncStorage, View, Image, Animated, Easing } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { saveUserdata } from '../actions/userdata';

import belloIcon from '../images/bello.png';

class SplashContainer extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.spin();
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
        setTimeout(() => Actions.login(), 1000);
      }
    } catch (error) {
      alert(`Error Retrieving Data : ${error}`);
    }
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
      },
    ).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [5, 0],
    });
    return (
      <View style={{ flex: 1, backgroundColor: '#3498DB', alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Image
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            transform: [{ translateY: spin }],
          }}
          source={belloIcon}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveUserdata: data => dispatch(saveUserdata(data)),
});

export default connect(null, mapDispatchToProps)(SplashContainer);
