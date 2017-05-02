import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProductItem = ({ toggleDetailModal, name, owner, price, image }) => (
  <TouchableOpacity style={styles.productCard} onPress={toggleDetailModal} activeOpacity={0.8}>
    <View style={styles.productCardImage}>
      <Image style={styles.productImage} source={{uri: image }} />
    </View>
    <View style={styles.productCardContent}>
      <Text style={styles.productTitle}>{ name }</Text>
      <Text style={styles.productDescription}>oleh { owner }</Text>
      <Text style={styles.productPrice}>{ price }</Text>
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
  },
  productCardImage: {
    flex: 0.3,
  },
  productCardContent: {
    flex: 0.7,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#EB9532',
  },
  productSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  productDescription: {
    color: '#666666',
  },
});

export default ProductItem;