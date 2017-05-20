// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import numeral from 'numeral';

import styles from './styles';

import RedButton from '../../../components/Core/RedButton';

type PropTypes = {
  name: string,
  maxPrice: number,
};

const RequestItem = ({ name, maxPrice }: PropTypes) => (
  <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={0.95}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{ name }</Text>
      <Text style={styles.maxPrice}>{ `Rp.${numeral(maxPrice).format('0,0[.]00')}` }</Text>
      <View style={{ flexDirection: 'row' }}>
        <RedButton label={'Batalkan'} handleClick={() => {}} />
      </View>
    </View>
  </TouchableOpacity>
);

export default RequestItem;
