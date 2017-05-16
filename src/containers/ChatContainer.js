import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MessageBubble from '../components/Chat/MessageBubble';
import ChatSearch from '../components/Chat/ChatSearch';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import ChatActionBar from '../components/Chat/ActionBar';
import ProductRecommendations from '../components/Product/Recommendations';
import ProductDetailPopup from '../components/Product/DetailPopup';

import cartIcon from '../images/shopping-cart.png';
import data from '../../data/db.json';

class productContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailPopupActive: false,
      products: data.products,
      requests: data.requests,
    };

    this.toggleDetailModal = this.toggleDetailModal.bind(this);
  }

  toggleDetailModal() {
    this.setState({ isDetailPopupActive: !this.state.isDetailPopupActive });
  }

  static renderRightButton = (props) => {
    return (
      <TouchableOpacity onPress={Actions.cart}>
        <Image source={cartIcon} style={{ width: 25, height: 25, marginTop: 0 }} />
      </TouchableOpacity>
    );
  };

  render() {
    const { isDetailPopupActive, products, requests } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.chatList}>
          <ChatSectionHeading headingText={'Senin, 25 Mei'} />
          <MessageBubble belloMessage="Bello bos! mau beli apa?" />
          <ChatSearch />
          <MessageBubble belloMessage="Dicari dulu ya!" />
          <MessageBubble belloMessage="Ketemu 5 barang yang cocok nih bos" />
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} products={products} />
          <MessageBubble belloMessage="Barang sudah dibeli. Checkout atau mau belanja lagi?" />
          <MessageBubble belloMessage="Mau beli apa lagi bos?" />
          <ChatSearch />
          <MessageBubble belloMessage="Dicari dulu ya!" />
          <MessageBubble belloMessage="Tidak ketemu nih, Bello umumin ke pelapak yang tertarik dulu ya. Nanti Bello kabarin lagi deh, gimana?" />
          <MessageBubble belloMessage="Siap! nanti Bello kabarin" />
          <ChatSectionHeading headingText={'21 Mei 2017'} />
          <MessageBubble belloMessage="Bello Hendry! Ada 2 barang yang kemarin kamu cari nih. Cek yuk!" />
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} products={requests} />
          <View style={{ height: 150, width: '100%' }}></View>
        </ScrollView>
        { isDetailPopupActive && <ProductDetailPopup toggleDetailModal={this.toggleDetailModal} /> }
      </View>
    );
  }
}

const deviceWidth = Dimensions.get('window').width;

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
    paddingTop: 70,
    flexDirection: 'column',
  },
  chatSectionHeading: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  chatSectionText: {
    fontWeight: 'bold',
    color: '#FFF',
  }
});

export default productContainer;
