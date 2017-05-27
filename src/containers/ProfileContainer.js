// @flow
import React from 'react';
import { View, Text, ScrollView, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import RedButton from '../components/Core/RedButton';

import { removeUserdata } from '../actions/userdata';
import * as colors from '../constants/colors';


const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 60,
    flexDirection: 'column',
  },
  profileField: {
    color: colors.darkGrey,
    margin: 10,
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
        <ScrollView style={styles.list}>
          <View>
            <ChatSectionHeading headingText={'My Profile'} />
            <HeadingDescription text={'Profil account Bukalapak'} />
            <View style={{
              padding: 10,
              backgroundColor: colors.white,
              marginTop: 10,
              borderRadius: 0,
              elevation: 2 }}
            >
              <Text style={styles.profileField}>Email: {this.props.userdata.email}</Text>
              <Text style={styles.profileField}>Username: {this.props.userdata.username}</Text>
              <Text style={styles.profileField}>Name: {this.props.userdata.name}</Text>

              <Text style={{ paddingTop: 10, paddingBottom: 10 }}> </Text>

              <RedButton label={'Logout'} handleClick={() => this.removeLoggedUserData().done()} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  removeUserdata: () => dispatch(removeUserdata()),
});

const mapStateToProps = state => ({
  userdata: state.userdata.result,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
