import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import ChatBubble from '../components/ChatBubble';
import ChatSearch from '../components/ChatSearch';
import ProductRecommendations from '../components/ProductRecommendations';
import ChatSectionHeading from '../components/ChatSectionHeading';
import ProductDetailPopup from '../components/ProductDetailPopup';
import ChatActionBar from '../components/ChatActionBar';

class productContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailPopupActive: false,
    };

    this.toggleDetailModal = this.toggleDetailModal.bind(this);
  }

  toggleDetailModal() {
    this.setState({ isDetailPopupActive: !this.state.isDetailPopupActive });
  }

  static renderRightButton = (props) => {
    return (
      <TouchableOpacity onPress={() => console.log('onRightPressed')}>
      </TouchableOpacity>
    );
  };

  render() {
    const { isDetailPopupActive } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.chatList}>
          <ChatBubble belloMessage="Bello bos! mau beli apa?" />
          <ChatSectionHeading headingText={'Cari Produk'} />
          <ChatSearch />
          <ChatBubble belloMessage="Dicari dulu ya!" />
          <ChatBubble belloMessage="Ketemu 5 barang yang cocok nih bos" />
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} />
          <ChatBubble belloMessage="Tidak ketemu nih, Bello umumin ke pelapak yang tertarik dulu ya. Nanti Bello kabarin lagi deh, gimana?" />
          <ChatBubble belloMessage="Bello Hendry! Ada 5 barang yang kemarin kamu cari nih. Cek yuk!" />
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} />
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} />
          <ChatBubble belloMessage="Barang sudah dibeli. Checkout atau mau belanja lagi?" />
          <View style={{ height: 150, width: '100%' }}></View>
        </ScrollView>
        <ChatActionBar />
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
    paddingTop: 100,
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
