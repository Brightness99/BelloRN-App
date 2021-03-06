// @flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import numeral from 'numeral';

import styles from './styles';

import RedButton from '../../../components/Core/RedButton';

type PropTypes = {
  keyword: string,
  deleteRequest: Function,
};

const RequestItem = ({ keyword, deleteRequest }: PropTypes) => (
  <TouchableOpacity style={styles.card} onPress={() => {}} activeOpacity={0.95}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{ keyword }</Text>
      <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>
        <RedButton label={'Batalkan'} handleClick={deleteRequest} />
      </View>
    </View>
  </TouchableOpacity>
);

export default RequestItem;
