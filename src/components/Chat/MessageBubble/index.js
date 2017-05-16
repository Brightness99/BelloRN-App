// @flow

import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import BelloWhiteLogo from '../../../images/bello-white-background.png';
import MeAvatar from '../../../images/me.png';

type Props = {
  sender: string,
  message: string,
  time: string,
};

const MessageBubble = ({ sender, message, time }: Props) => (
  <View style={styles.chatBubbleContainer}>
    <View style={styles.chatAvatar}>
      { sender === 'Bello' ? (
        <Image style={styles.chatAvatarImage} source={BelloWhiteLogo} />
      ) : (<Image style={styles.chatAvatarImage} source={MeAvatar} />) }
    </View>
    <View style={styles.chatMessage}>
      <View style={styles.chatInfo}>
        <Text style={styles.senderName}>{ sender }</Text>
        <Text style={styles.messageTime}>{ time }</Text>
      </View>
      <View style={styles.chatBubble}>
        <View style={styles.productCardContent}>
          <Text style={styles.productDescription}>{message}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default MessageBubble;
