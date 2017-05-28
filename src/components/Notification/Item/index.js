// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

import OrangeButton from '../../../components/Core/OrangeButton';

type PropTypes = {
  keyword: string,
  showRecommendation: Function,
};

const NotificationItem = ({ keyword, showRecommendation }: PropTypes) => (
  <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={0.95}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>Tersedia barang baru untuk pencarian { keyword }</Text>
      <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
        <OrangeButton label={'Lihat'} handleClick={showRecommendation} />
      </View>
    </View>
  </TouchableOpacity>
);

export default NotificationItem;
