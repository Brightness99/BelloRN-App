// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import type { ButtonPropTypes } from '../../types';

const styles = {
  button: {
    flex: 1,
    backgroundColor: '#353535',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

const GreyButton = ({ label, handleClick }: ButtonPropTypes) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={handleClick}>
    <Text style={styles.btnText}>{ label }</Text>
  </TouchableOpacity>
);

export default GreyButton;
