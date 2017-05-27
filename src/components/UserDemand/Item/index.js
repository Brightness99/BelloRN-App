// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import numeral from 'numeral';

import styles from './styles';

import GreenButton from '../../../components/Core/GreenButton';

type PropTypes = {
  keyword: string,
  total: number,
  addChart: Function,
};

const UserDemandItem = ({ keyword, total, addChart }: PropTypes) => (
  <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={0.95}>
    <View style={styles.cardContent}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>{ keyword }</Text>
        <Text style={styles.smaller}>{ total } orang butuh barang ini!</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 15, paddingLeft: 10, paddingRight: 10 }}>
        <GreenButton label={'Pilih'} handleClick={addChart} />
      </View>
    </View>
  </TouchableOpacity>
);

export default UserDemandItem;
