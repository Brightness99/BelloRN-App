import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const ChatBubble = props => (
  <View style={styles.chatBubbleContainer}>
    <View style={styles.chatAvatar}>
      <Image style={styles.chatAvatarImage} source={{uri: 'https://pbs.twimg.com/profile_images/378800000451012500/4628fbb9dc70514d389ed9491243866f_400x400.png'}} />
    </View>
    <View style={styles.chatBubble}>
      <View style={styles.productCardContent}>
        <Text style={styles.productDescription}>{props.belloMessage}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatList: {
    flex: 1,
    width: '100%',
    padding: 0,
    paddingTop: 100,
    flexDirection: 'column',
  },
  chatBubbleContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 10,
  },
  chatAvatar: {
    width: '20%',
    height: 50,
    paddingTop: 0,
  },
  chatAvatarImage: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  chatBubble: {
    marginTop: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
    width: '70%',
    elevation: 1,
    flexDirection: 'row',
  },
  productCardImage: {
    flex: 0.3,
  },
  productCardContent: {
    flex: 0.7,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#EB9532',
  },
  productSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  productDescription: {
    color: '#666666',
  },
  chatSearchContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  chatInput: {
    paddingLeft: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
  },
});

export default ChatBubble;
