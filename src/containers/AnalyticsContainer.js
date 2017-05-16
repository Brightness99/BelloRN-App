import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import SampleBarChart from '../components/SampleBarChart';
import ProductItem from '../components/Product/Item';
import MessageBubble from '../components/Chat/MessageBubble';
import FooterActionButton from '../components/FooterActionButton';

class AnalyticsContainer extends React.Component {
  static renderRightButton = (props) => {
        return (
            <TouchableOpacity onPress={() => console.log('onRightPressed')}>
            </TouchableOpacity>
        );
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageBubble belloMessage="Yang request untuk membeli iPhone 10s meningkat lho!" />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF', marginTop: 10 }}>iPhone 10s Trends</Text>
        <View style={{ height: 350, margin: 10, paddingLeft: 40, paddingTop: 10, backgroundColor: '#FFF', elevation: 2, borderRadius: 10 }}>
          <SampleBarChart />
        </View>
        <FooterActionButton text="Buka lapak dan Jual iPhone 10 Sekarang!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  productList: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 100,
    flexDirection: 'column',
  },
});

export default AnalyticsContainer;
