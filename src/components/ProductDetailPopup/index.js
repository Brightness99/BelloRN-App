import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';
import ReviewItem from '../ReviewItem';

const ProductDetailPopup = ({ toggleDetailModal }) => (
  <View style={styles.popupOverlay}>
    <View style={styles.popupModal}>
      <TouchableOpacity style={styles.closeBtn} activeOpacity={0.8} onPress={toggleDetailModal}>
        <Text style={styles.closeBtnText}>x</Text>
      </TouchableOpacity>
      <Image style={styles.productImage} source={{ uri: 'https://s0.bukalapak.com/img/589340477/large/Kredit_iPhone_5s_16GB_dengan_Cicilan_Tanpa_Kartu_Kredit.jpg' }} />
      <Text style={styles.productTitle}>iPhone 10</Text>
      <Text style={styles.productDescription}>Makmur Gadget Shoppe</Text>
      <Text style={styles.productPrice}>{'Rp. 20,000,000'}</Text>
      <Text style={{ fontWeight: 'bold' }}>Reviews</Text>
      <ScrollView horizontal style={styles.reviews}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((productRec, i) => (
          <View key={i} style={styles.reviewWrapper}>
            <ReviewItem />
          </View>
        ))}
      </ScrollView>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btnBuy} activeOpacity={1}>
          <Text style={styles.btnText}>Beli</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWishList} activeOpacity={1}>
          <Text style={styles.btnText}>Tambah ke Wishlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default ProductDetailPopup;
