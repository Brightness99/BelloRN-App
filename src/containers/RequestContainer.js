// @flow
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import RequestItem from '../components/Request/Item';
import FooterActionButton from '../components/FooterActionButton';
import ChatSectionHeading from '../components/Chat/SectionHeading';

import data from '../../data/db.json';
import type { ProductsType } from '../types';

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

class RequestContainer extends React.Component {
  static renderRightButton = () => (
    <TouchableOpacity onPress={() => {}}>
      <Text style={{ color: '#D91E18' }}>Clear All</Text>
    </TouchableOpacity>
  );

  constructor(props: Object) {
    super(props);
    this.state = {
      requests: data.requests,
    };

    this.clearRequest = this.clearRequest.bind(this);
  }

  state: {
    carts: ProductsType,
  }

  clearRequest: Function;

  clearRequest() {
    this.setState({
      requests: [],
    });
  }

  render() {
    const { requests } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'List barang yang kamu cari. Bello akan mengabari secepatnya apabila ada barang baru yang sesuai.'} />
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
