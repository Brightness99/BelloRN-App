import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProductMoreItem = ({ toggleDetailModal }) => (
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

const styles = StyleSheet.create({
  productCard: {
    margin: 5,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    elevation: 3,
    flexDirection: 'row',
    marginRight: 30,
  },
  productCardImage: {
    flex: 0.4,
    alignSelf: 'flex-end',
  },
  productCardContent: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#EB9532',
  },
  productSeller: {
    fontSize: 16,
    color: '#26A65B',
  },
  productDescription: {
    color: '#666666',
  },
});

export default ProductMoreItem;
