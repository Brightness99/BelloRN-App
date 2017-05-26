// @flow
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

import ProductItem from '../components/Product/Item';
import FooterActionButton from '../components/FooterActionButton';

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

class CartContainer extends React.Component {
  static renderRightButton = () => (
    <TouchableOpacity onPress={() => console.log('onRightPressed')}>
      <Text style={{ color: '#D91E18' }}>Clear All</Text>
    </TouchableOpacity>
  );

  constructor(props: Object) {
    super(props);
    this.state = {
      carts: data.products,
    };

    this.clearCart = this.clearCart.bind(this);
    this.openBukalapakWeb = this.openBukalapakWeb.bind(this);
  }

  state: {
    carts: ProductsType,
  }

  clearCart: Function;

  clearCart() {
    this.setState({
      carts: [],
    });
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
