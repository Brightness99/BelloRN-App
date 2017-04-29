import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import ProductItem from '../ProductItem';
import ChatSectionHeading from '../ChatSectionHeading';

const ProductRecommendations = ({ toggleDetailModal }) => (
  <View>
    <ChatSectionHeading headingText={'Rekomendasi Produk: Nendoroid Menma'} />
    <ScrollView horizontal style={styles.productRecommendations}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((productRec, i) => (
        <View key={i} style={styles.productRecWrapper}>
          <ProductItem toggleDetailModal={toggleDetailModal} />
        </View>
      ))}
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
});

export default ProductRecommendations;
