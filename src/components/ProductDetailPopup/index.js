import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import ReviewItem from '../ReviewItem';

const ProductDetailPopup = ({ toggleDetailModal }) => (
  <View style={styles.popupOverlay}>
    <View style={styles.popupModal}>
      <TouchableOpacity style={styles.closeBtn} activeOpacity={0.8} onPress={toggleDetailModal}>
        <Text style={styles.closeBtnText}>x</Text>
      </TouchableOpacity>
      <Image style={styles.productImage} source={{uri: 'http://images.goodsmile.info/cgm/images/product/20111026/3326/30336/medium/d310f1d447089a4fd0da9f4f31fcaf44.jpg'}} />
      <Text style={styles.productTitle}>Nendoroid Menma</Text>
      <Text style={styles.productDescription}>oleh Lapak Sukses Sejahtera</Text>
      <Text style={styles.productPrice}>{`Rp. 500.000`}</Text>
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

const deviceWidth = Dimensions.get('window').width;

const styles = {
  popupOverlay: {
    position: 'absolute',
    padding: 20,
    paddingTop: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%'
  },
  popupModal: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center'
  },
  productImage: {
    margin: 10,
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
  },

  productTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#EB9532',
    padding: 10,
  },
  productSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  productDescription: {
    color: '#666666',
  },
  reviews: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
  reviewWrapper: {
    width: deviceWidth * 0.7,
  },
  btnWrapper: {
    padding: 0,
    flexDirection: 'row',
  },
  btnBuy: {
    flex: 1,
    backgroundColor: '#16A085',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnWishList: {
    flex: 1,
    backgroundColor: '#EB9532',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#6C7A89',
    padding: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  closeBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  }
}

export default ProductDetailPopup;
