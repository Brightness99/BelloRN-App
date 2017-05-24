// @flow
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import UserDemandItem from '../components/UserDemand/Item';
import FooterActionButton from '../components/FooterActionButton';

import data from '../../data/db.json';
import type { DemandsType } from '../types';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 100,
    flexDirection: 'column',
  },
};

class ManageAnalyticsContainer extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      demands: [
        { id: 1, demand: 'Sendok Ajaib', voter: 125, category: 'utensils' },
        { id: 2, demand: 'iPhone 10', voter: 122, category: 'smartphone' },
        { id: 3, demand: 'Google Nexus 200', voter: 120, category: 'smartphone' },
      ],
    };
  }

  state: {
    demands: DemandsType,
  }

  render() {
    const { demands } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <ChatSectionHeading headingText={'Pencarian Terbesar'} />
          {demands.map(demand => (
            <UserDemandItem key={demand.id} {...demand} toggleDetailModal={() => {}} />
          ))}
          <ChatSectionHeading headingText={'Pencarian Sesuai Minat Kamu'} />
          {demands.map(demand => (
            <UserDemandItem key={demand.id} {...demand} toggleDetailModal={() => {}} />
          ))}
        </ScrollView>
        <FooterActionButton text="< Kembali ke Analisa" handlePress={Actions.pop} />
      </View>
    );
  }
}

export default ManageAnalyticsContainer;
