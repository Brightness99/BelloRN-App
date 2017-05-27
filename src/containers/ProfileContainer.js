// @flow
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import RedButton from '../components/Core/RedButton';

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
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <View>
            <ChatSectionHeading headingText={'My Profile'} />
            <View style={{ padding: 10 }}>
              <Text style={styles.profileField}>Name: Hendruy</Text>
              <Text style={styles.profileField}>Email: hendruy@gmail.com</Text>
              <RedButton label={'Logout'} handleClick={() => Actions.pop()} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileContainer;
