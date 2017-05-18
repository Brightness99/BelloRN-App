// @flow
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import numeral from 'numeral';

import styles from './styles';

type PropTypes = {
  toggleDetailModal: Function,
  name: string,
  owner: string,
  price: number,
  image: string,
};

const ProductItem = ({ toggleDetailModal, name, owner, price, image }: PropTypes) => (
  <TouchableOpacity style={styles.productCard} onPress={toggleDetailModal} activeOpacity={0.95}>
    <View style={styles.productCardImage}>
      <Image style={styles.productImage} source={{ uri: image }} />
    </View>
    <View style={styles.productCardContent}>
      <Text style={styles.productTitle}>{ name }</Text>
      <Text style={styles.productDescription}>oleh { owner }</Text>
      <Text style={styles.productPrice}>{ `Rp.${numeral(price).format('0,0[.]00')}` }</Text>
    </View>
  </TouchableOpacity>
);

export default ProductItem;
