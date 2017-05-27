// @flow
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import RequestItem from '../components/Request/Item';
import FooterActionButton from '../components/FooterActionButton';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import ActionSuccessInfo from '../components/Core/ActionSuccessInfo';

import * as colors from '../constants/colors';
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
      requests: [],
      successInfo: false,
      successInfoMessage: '',
    };

    this.deleteRequest = this.deleteRequest.bind(this);
  }

  state: {
    carts: ProductsType,
  }

  deleteRequest() {
    this.setState({
      successInfo: true,
      successInfoMessage: 'Request Sukses Dihapus!',
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
    const { requests } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'List Request'} />
          <HeadingDescription text={'List barang yang kamu request dan akan direminder oleh Bello'} />
          <View style={{ height: 30 }} />
          {requests.map(request => (
            <RequestItem key={request.id} {...request} deleteRequest={this.deleteRequest} />
          ))}
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        <FooterActionButton text="+ Cari Barang Baru" handlePress={Actions.chat} />
        { this.renderSuccessInfo() }
      </View>
    );
  }
}

export default RequestContainer;
