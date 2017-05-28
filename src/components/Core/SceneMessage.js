import React from 'react';
import { View, Text } from 'react-native';

import * as colors from '../../constants/colors';

export default ({ children }) => (
  <View style={{ padding: 20 }}>
    <Text style={{ color: colors.orange, fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
      { children }
    </Text>
  </View>
);
