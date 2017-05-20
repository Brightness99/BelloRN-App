// @flow
import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import OrangeButton from '../Core/OrangeButton';

type PropTypes = { text: string, handlePress: Function };

const FooterActionButton = ({ text, handlePress }: PropTypes) => (
  <View style={styles.actionBar}>
    <OrangeButton label={text} handleClick={handlePress} />
  </View>
);

export default FooterActionButton;
