import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import ProductItem from '../ProductItem';
import ProductMoreItem from '../ProductItem/More';
import ChatSectionHeading from '../ChatSectionHeading';

const ProductRecommendations = ({ toggleDetailModal, products }) => (
  <View>
    <ChatSectionHeading headingText={'Rekomendasi Produk: iPhone 10'} />
    <ScrollView horizontal style={styles.productRecommendations}>
      {products.map((product, i) => (
        <View key={i} style={styles.productRecWrapper}>
          <ProductItem toggleDetailModal={toggleDetailModal} {...product} />
        </View>
      ))}
        <View style={styles.productRecWrapperMore}>
          <ProductMoreItem toggleDetailModal={toggleDetailModal} />
        </View>
    </ScrollView>
  </View>
);

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  productRecommendations: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
  productRecWrapper: {
    width: deviceWidth * 0.9,
  },
  productRecWrapperMore: {
    width: deviceWidth * 0.9,
  },
});

export default ProductRecommendations;
