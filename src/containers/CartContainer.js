import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import ProductItem from '../components/Product/Item';
import FooterActionButton from '../components/FooterActionButton';

import data from '../../data/db.json';

class CartContainer extends React.Component {
  static renderRightButton = (props) => {
        return (
            <TouchableOpacity onPress={() => console.log('onRightPressed')}>
                <Text>Clear All</Text>
            </TouchableOpacity>
        );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          {data.products.concat(data.requests).map((product, i) => (
            <ProductItem key={i} {...product} toggleDetailModal={() => console.log('s')} />
          ))}
          <View style={{ height: 150, width: '100%' }}></View>
        </ScrollView>
        <FooterActionButton text="CHECKOUT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default CartContainer;
