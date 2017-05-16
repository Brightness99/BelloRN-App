// @flow

import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import GreenButton from '../Core/GreenButton';

const FooterActionButton = ({ text }: {text: string}) => (
  <View style={styles.actionBar}>
    <GreenButton label={text} handleClick={() => {}} />
  </View>
);

export default FooterActionButton;
