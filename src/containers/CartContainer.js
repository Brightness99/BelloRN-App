// @flow
import React from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import ProductItem from '../components/Product/Item';
import FooterActionButton from '../components/FooterActionButton';

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

class CartContainer extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      carts: [],
    };

    this.openBukalapakWeb = this.openBukalapakWeb.bind(this);
  }

  state: {
    carts: ProductsType,
  }

  openBukalapakWeb() {
    const url = 'https://bukalapak.com';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    const { carts } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'Keranjang Belanja'} />
          <HeadingDescription text={'Keranjang belanja otomatis masuk ke keranjang belanja akun Bukalapak kamu. Checkout untuk masuk ke pembayaran melalui bukalapak'} />
          <View style={{ height: 30 }} />
          {carts.map(product => (
            <ProductItem key={product.id} {...product} toggleDetailModal={() => {}} />
          ))}
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        <FooterActionButton text="CHECKOUT" handlePress={this.openBukalapakWeb} />
      </View>
    );
  }
}

export default CartContainer;
