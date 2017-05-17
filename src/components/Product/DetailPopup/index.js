// @flow
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';
import ReviewItem from '../ReviewItem';

import GreyButton from '../../Core/GreyButton';
import type { ProductType } from '../../../types';

const ProductDetailPopup = ({ toggleDetailModal, product }: {toggleDetailModal: Function, product: ProductType}) => (
  <View style={styles.popupOverlay}>
    <View style={styles.popupModal}>
      <TouchableOpacity style={styles.closeBtn} activeOpacity={0.8} onPress={toggleDetailModal}>
        <Text style={styles.closeBtnText}>x</Text>
      </TouchableOpacity>
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Text style={styles.productTitle}>{ product.name }</Text>
      <Text style={styles.productDescription}>{ product.owner }</Text>
      <Text style={styles.productPrice}>{ product.price }</Text>
      <Text style={{ fontWeight: 'bold' }}>Reviews</Text>
      <ScrollView horizontal style={styles.reviews}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((productRec, i) => (
          <View key={i} style={styles.reviewWrapper}>
            <ReviewItem />
          </View>
        ))}
      </ScrollView>
      <View style={styles.btnWrapper}>
        <GreyButton label="<< Sebelumnya" handleClick={() => {}} />
        <GreyButton label="Selanjutnya >>" handleClick={() => {}} />
      </View>
    </View>
  </View>
);

export default ProductDetailPopup;
