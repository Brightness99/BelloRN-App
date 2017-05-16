import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const ReviewItem = () => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>Hendry Setiadi</Text>
      <Text style={styles.description}>
        Kualitas barangnya bagus, packaging rapi, dan sesuai dengan ekspektasi. 2 thumbs up!
      </Text>
    </View>
  </View>
);

export default ReviewItem;
