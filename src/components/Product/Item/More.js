// @flow
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

type PropTypes = { toggleDetailModal: Function };
const ProductMoreItem = ({ toggleDetailModal }: PropTypes) => (
  <TouchableOpacity style={styles.productCard} onPress={toggleDetailModal} activeOpacity={0.8}>
    <View style={styles.productCardImage}>
      <Image
        source={{ uri: 'https://blog.bukalapak.com/wp-content/uploads/2016/05/logo-icon-baru.png' }}
        style={styles.productImage}
      />
    </View>
    <View style={styles.productCardContent}>
      <Text style={styles.productDescription}> Gak Ketemu? </Text>
      <Text style={styles.productPrice}> Cari Lebih Banyak</Text>
    </View>
  </TouchableOpacity>
);

export default ProductMoreItem;
