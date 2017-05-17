// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import type { ButtonPropTypes } from '../../types';

const styles = {
  button: {
    flex: 1,
    backgroundColor: '#EB9532',
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

const OrangeButton = ({ label, handleClick }: ButtonPropTypes) => (
  <TouchableOpacity style={styles.button} activeOpacity={1} onPress={handleClick}>
    <Text style={styles.btnText}>{ label }</Text>
  </TouchableOpacity>
);

export default OrangeButton;
