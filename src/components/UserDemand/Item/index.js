// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import numeral from 'numeral';

import styles from './styles';

import GreenButton from '../../../components/Core/GreenButton';

type PropTypes = {
  demand: string,
  voter: number,
  category: string,
};

const UserDemandItem = ({ demand, voter, category }: PropTypes) => (
  <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={0.95}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{ demand }</Text>
      <Text style={styles.smaller}>{ voter } orang butuh barang ini!</Text>
      <Text style={styles.smaller}>Category: { category }</Text>
      <View style={{ flexDirection: 'row' }}>
        <GreenButton label={'Pilih'} handleClick={() => {}} />
      </View>
    </View>
  </TouchableOpacity>
);

export default UserDemandItem;