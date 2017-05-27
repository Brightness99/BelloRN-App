import React from 'react';
import { View, Text } from 'react-native';

const ActionSuccessInfo = ({ label }) => (
  <View style={{ top: 80, opacity: 0.8, position: 'absolute', padding: 20, backgroundColor: '#019875', borderRadius: 5, width: '80%' }}>
    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
      { label }
    </Text>
  </View>
);

export default ActionSuccessInfo;
