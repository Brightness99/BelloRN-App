import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import ProductItem from '../components/Product/Item';

class ProductContainer extends React.Component {
  static renderRightButton = (props) => {
        return (
            <TouchableOpacity onPress={() => console.log('onRightPressed')}>
                <Text>Cart</Text>
            </TouchableOpacity>
        );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((x, i) => (
            <ProductItem key={i} toggleDetailModal={() => console.log('s')} />
          ))}
        </ScrollView>
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

export default ProductContainer;
