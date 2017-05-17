// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import ProductItem from '../Item';
import ProductMoreItem from '../Item/More';
import ChatSectionHeading from '../../Chat/SectionHeading';

import type { ProductsType } from '../../../types';

type PropTypes = {
  toggleDetailModal: Function,
  products: ProductsType,
};

const ProductRecommendations = ({ toggleDetailModal, products }: PropTypes) => (
  <View>
    <ChatSectionHeading headingText={'Rekomendasi Produk: iPhone 10'} />
    <ScrollView horizontal style={styles.productRecommendations}>
      {products.map(product => (
        <View key={product.id} style={styles.productRecWrapper}>
          <ProductItem toggleDetailModal={() => toggleDetailModal(product)} {...product} />
        </View>
      ))}
      <View style={styles.productRecWrapperMore}>
        <ProductMoreItem toggleDetailModal={toggleDetailModal} />
      </View>
    </ScrollView>
  </View>
);

export default ProductRecommendations;
