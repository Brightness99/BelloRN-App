import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import ProductItem from '../components/ProductItem';
import FooterActionButton from '../components/FooterActionButton';

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
          {[1, 2, 3, 4].map((x, i) => (
            <ProductItem key={i} toggleDetailModal={() => console.log('s')} />
          ))}
          <View style={{ height: 150, width: '100%' }}></View>
        </ScrollView>
        <FooterActionButton />
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
