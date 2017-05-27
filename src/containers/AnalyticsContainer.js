// @flow
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import TrendLineChart from '../components/TrendLineChart';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import FooterActionButton from '../components/FooterActionButton';

import * as colors from '../constants/colors';

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 0,
    flexDirection: 'column',
  },
};

class AnalyticsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analytics: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <ChatSectionHeading headingText={'List Analisa'} />
          <HeadingDescription text={'Kamu Belum Punya Analisa Barang Apapun. Mulai analisa tren sekarang!'} />
          <TrendLineChart />
          <TrendLineChart />
          <TrendLineChart />
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        <FooterActionButton text="+ Tambah Analisa Baru" handlePress={Actions.manageAnalytics} />
      </View>
    );
  }
}

export default AnalyticsContainer;
