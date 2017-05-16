// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import ProductItem from '../Item';
import ProductMoreItem from '../Item/More';
import ChatSectionHeading from '../../Chat/SectionHeading';

type Props = {
  toggleDetailModal: Function,
  products: [{ name: string, owner: string, price: number, image: string}],
};

const ProductRecommendations = ({ toggleDetailModal, products }: Props) => (
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

export default ProductRecommendations;
