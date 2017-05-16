// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import type { ButtonPropTypes } from '../../types';

const styles = {
  button: {
    flex: 1,
    backgroundColor: '#16A085',
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

const GreenButton = ({ label, handleClick }: ButtonPropTypes) => (
  <TouchableOpacity style={styles.button} activeOpacity={1} onClick={handleClick}>
    <Text style={styles.btnText}>{ label }</Text>
  </TouchableOpacity>
);

export default GreenButton;
