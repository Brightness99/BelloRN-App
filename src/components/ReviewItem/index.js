import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const ReviewItem = () => (
  <View style={styles.reviewCard}>
    <View style={styles.reviewCardContent}>
      <Text style={styles.reviewTitle}>Hendry Setiadi</Text>
      <Text style={styles.reviewDescription}>Kualitas barangnya bagus, packaging rapi, dan sesuai dengan ekspektasi. 2 thumbs up!</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  reviewCard: {
    margin: 5,
    marginTop: 10,
    backgroundColor: '#FEFEFE',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    elevation: 2,
    flexDirection: 'row',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 0.5,
  },
  reviewCardImage: {
    flex: 0.3,
  },
  reviewCardContent: {
    flex: 0.7,
    padding: 10,
  },
  reviewImage: {
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  reviewPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#EB9532',
  },
  reviewSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  reviewDescription: {
    color: '#666666',
  },
});

export default ReviewItem;
