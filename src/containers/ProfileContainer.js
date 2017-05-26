// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';
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
  productList: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 100,
    flexDirection: 'column',
  },
};

class ProfileContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <View>
            <ChatSectionHeading headingText={'My Profile'} />
            <RedButton label={'Logout'} handleClick={() => Actions.pop()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileContainer;
