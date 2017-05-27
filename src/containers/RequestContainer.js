// @flow
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import RequestItem from '../components/Request/Item';
import FooterActionButton from '../components/FooterActionButton';
import ChatSectionHeading from '../components/Chat/SectionHeading';

import * as colors from '../constants/colors';
import data from '../../data/db.json';
import type { ProductsType } from '../types';

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
    paddingTop: 60,
    flexDirection: 'column',
  },
};

class RequestContainer extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      requests: data.requests,
    };
  }

  state: {
    carts: ProductsType,
  }

  render() {
    const { requests } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'List Request'} />
          <Text style={{ color: '#000' }}>List barang yang kamu request dan akan direminder oleh Bello</Text>
          <View style={{ height: 30 }} />
          {requests.map(request => (
            <RequestItem key={request.id} {...request} />
          ))}
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        <FooterActionButton text="+ Cari Barang Baru" handlePress={Actions.chat} />
      </View>
    );
  }
}

export default RequestContainer;
