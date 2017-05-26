import React from 'react';
import { AsyncStorage, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'
import { saveUserdata } from '../actions/userdata'

import belloIcon from '../images/bello.png';


class SplashContainer extends React.Component {
  componentDidMount = () => {
    this.loadLoggedUserData().done()
  }

  loadLoggedUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Bello:user')
      if (value !== null){
        const data = JSON.parse(value)
        this.props.saveUserdata(data)
        Actions.home()
      }
      else{
        Actions.login()
      }
    } catch (error) {
      alert('Error Retrieving Data : ' + error)
    }
  }


  render() {
    return (
      <View>
        <Image source={belloIcon} style={{ width: 200, height: 200}} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveUserdata: (data) => dispatch(saveUserdata(data))
});

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer)
