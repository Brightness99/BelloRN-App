// @flow
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import SampleBarChart from '../components/SampleBarChart';
import TrendLineChart from '../components/TrendLineChart';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import FooterActionButton from '../components/FooterActionButton';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
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
      analytics: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <ChatSectionHeading headingText={'Kamu Belum Punya Analisa Barang Apapun. Mulai analisa tren sekarang!'} />
          <TrendLineChart />
          <TrendLineChart />
          <TrendLineChart />
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        <FooterActionButton text="+ Tambah Analisa Baru" handlePress={() => {}} />
      </View>
    );
  }
}

export default AnalyticsContainer;
