// @flow

import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

type Props = {
  toggleDetailModal: string,
  name: number,
  owner: string,
  price: string,
  image: string,
};

const ProductItem = ({ toggleDetailModal, name, owner, price, image }: Props) => (
  <TouchableOpacity style={styles.productCard} onPress={toggleDetailModal} activeOpacity={0.8}>
    <View style={styles.productCardImage}>
      <Image style={styles.productImage} source={{ uri: image }} />
    </View>
    <View style={styles.productCardContent}>
      <Text style={styles.productTitle}>{ name }</Text>
      <Text style={styles.productDescription}>oleh { owner }</Text>
      <Text style={styles.productPrice}>{ price }</Text>
    </View>
  </TouchableOpacity>
);

export default ProductItem;
