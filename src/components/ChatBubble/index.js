import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import BelloWhiteLogo from '../../images/bello-white-background.png';

const ChatBubble = ({ belloMessage }) => (
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

export default ChatBubble;
