// @flow
import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import GreenButton from '../../Core/GreenButton';
import OrangeButton from '../../Core/OrangeButton';
import RedButton from '../../Core/RedButton';

type PropTypes = {
  redLabel: string,
  redMethod: Function,
  orangeLabel: string,
  orangeMethod: Function,
  greenLabel: string,
  greenMethod: Function,
};

const ChatActionBar = ({
  redLabel,
  redMethod = () => {},
  orangeLabel,
  orangeMethod = () => {},
  greenLabel,
  greenMethod = () => {},
}: PropTypes) => (
  <View style={styles.actionBar}>
    { redLabel && <RedButton label={redLabel} handleClick={redMethod} /> }
    { orangeLabel && <OrangeButton label={orangeLabel} handleClick={orangeMethod} /> }
    { greenLabel && <GreenButton label={greenLabel} handleClick={greenMethod} /> }
  </View>
);

export default ChatActionBar;
