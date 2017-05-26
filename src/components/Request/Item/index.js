// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import numeral from 'numeral';

import styles from './styles';

import RedButton from '../../../components/Core/RedButton';

type PropTypes = {
  name: string,
};

const RequestItem = ({ name }: PropTypes) => (
  <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={0.95}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{ name }</Text>
      <View style={{ flexDirection: 'row' }}>
        <RedButton label={'Batalkan'} handleClick={() => {}} />
      </View>
    </View>
  </TouchableOpacity>
);

export default RequestItem;
