// @flow
import React from 'react';
import { View, ScrollView, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import RedButton from '../components/Core/RedButton';

import { removeUserdata } from '../actions/userdata';


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productList: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 100,
    flexDirection: 'column',
  },
};

class ProfileContainer extends React.Component {

  removeLoggedUserData = async () => {
    try {
      await AsyncStorage.removeItem('@Bello:user');
      this.props.removeUserdata();
      Actions.pop({ popNum: 2 });
    } catch (error) {
      Alert.alert(
        `Log Out Error ${error}`,
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <View>
            <ChatSectionHeading headingText={'My Profile'} />
            <RedButton label={'Logout'} handleClick={() => this.removeLoggedUserData().done()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  removeUserdata: () => dispatch(removeUserdata()),
});

export default connect(null, mapDispatchToProps)(ProfileContainer);
