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
  searchKeyword: string,
};

const ProductRecommendations = ({ toggleDetailModal, products, searchKeyword }: PropTypes) => (
  <View>
    <ChatSectionHeading headingText={`Rekomendasi Produk: ${searchKeyword}`} />
    <ScrollView horizontal style={styles.productRecommendations}>
      {products.map((product, index) => (
        <View key={product.id} style={styles.productRecWrapper}>
          <ProductItem toggleDetailModal={() => toggleDetailModal(product, index)} {...product} />
        </View>
      ))}
      <View style={styles.productRecWrapperMore}>
        <ProductMoreItem toggleDetailModal={toggleDetailModal} />
      </View>
    </ScrollView>
  </View>
);

export default ProductRecommendations;
