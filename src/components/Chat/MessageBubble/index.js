// @flow

import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import BelloWhiteLogo from '../../../images/bello-white-background.png';

const MessageBubble = ({ belloMessage }: {belloMessage: string}) => (
  <View style={styles.chatBubbleContainer}>
    <View style={styles.chatAvatar}>
      <Image style={styles.chatAvatarImage} source={BelloWhiteLogo} />
    </View>
    <View style={styles.chatBubble}>
      <View style={styles.productCardContent}>
        <Text style={styles.productDescription}>{belloMessage}</Text>
      </View>
    </View>
  </View>
);

export default MessageBubble;
