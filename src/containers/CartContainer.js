// @flow

import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import ProductItem from '../components/Product/Item';
import FooterActionButton from '../components/FooterActionButton';

import data from '../../data/db.json';

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

  constructor(props) {
    super(props);
    this.state = {
      carts: data.products,
    };

    this.clearCart = this.clearCart.bind(this);
  }

  clearCart() {
    this.setState = {
      carts: [],
    };
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
        <FooterActionButton text="CHECKOUT" />
      </View>
    );
  }
}

export default CartContainer;
