// @flow
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const ReviewItem = ({
  review,
}: {
  review: Object
}) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{review.sender_name}</Text>
      <Text style={styles.description}>
        {review.body}
      </Text>
    </View>
  </View>
);

export default ReviewItem;
