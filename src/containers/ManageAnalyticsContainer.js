// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import ActionSuccessInfo from '../components/Core/ActionSuccessInfo';
import UserDemandItem from '../components/UserDemand/Item';
import FooterActionButton from '../components/FooterActionButton';

import * as colors from '../constants/colors';
import type { DemandsType } from '../types';

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
      successInfo: false,
      successInfoMessage: '',
    };

    this.addChart = this.addChart.bind(this);
  }

  state: {
    demands: DemandsType,
  }

  addChart() {
    this.setState({
      successInfo: true,
      successInfoMessage: 'Analisa sukses ditambahkan!',
    });
    setTimeout(() => this.setState({
      successInfo: false,
      successInfoMessage: '',
    }), 2000);
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
    const { demands } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <ChatSectionHeading headingText={'Pencarian Terbesar'} />
          <HeadingDescription text={'Cari keyword barang yang paling sering dicari oleh user'} />
          {demands.map(demand => (
            <UserDemandItem
              key={demand.id}
              {...demand}
              addChart={this.addChart}
              toggleDetailModal={() => {}}
            />
          ))}
          <ChatSectionHeading headingText={'Pencarian Sesuai Minat Kamu'} />
          {demands.map(demand => (
            <UserDemandItem key={demand.id} {...demand} toggleDetailModal={() => {}} />
          ))}
        </ScrollView>
        <FooterActionButton text="< Kembali ke Analisa" handlePress={Actions.pop} />
        { this.renderSuccessInfo() }
      </View>
    );
  }
}

export default ManageAnalyticsContainer;
