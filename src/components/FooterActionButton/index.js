// @flow
import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import OrangeButton from '../Core/OrangeButton';

type PropTypes = { text: string };

const FooterActionButton = ({ text }: PropTypes) => (
  <View style={styles.actionBar}>
    <OrangeButton label={text} handleClick={() => {}} />
  </View>
);

export default FooterActionButton;
