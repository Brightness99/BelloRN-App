// @flow
import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import GreenButton from '../Core/GreenButton';

type PropTypes = { text: string };

const FooterActionButton = ({ text }: PropTypes) => (
  <View style={styles.actionBar}>
    <GreenButton label={text} handleClick={() => {}} />
  </View>
);

export default FooterActionButton;
