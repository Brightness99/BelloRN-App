// @flow

import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MessageBubble from '../components/Chat/MessageBubble';
import ChatSearch from '../components/Chat/ChatSearch';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import ProductRecommendations from '../components/Product/Recommendations';
import ProductDetailPopup from '../components/Product/DetailPopup';

import cartIcon from '../images/shopping-cart.png';
import BelloIcon from '../images/bello.png';
import data from '../../data/db.json';
import type { ChatsType, ProductsType } from '../types';

const styles = {
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
  },
};

class productContainer extends React.Component {
  static renderRightButton = () => (
    <TouchableOpacity onPress={Actions.cart}>
      <Image source={cartIcon} style={{ width: 25, height: 25, marginTop: 0 }} />
    </TouchableOpacity>
  );

  constructor(props: Object) {
    super(props);
    this.state = {
      isDetailPopupActive: false,
      products: data.products,
      requests: data.requests,
      chats: [
        { id: 1, sender: 'Bello', message: 'Bello bos! Mau beli apa?', time: '12:30' },
      ],
      isSearching: true,
      isSearchingSubmitted: false,
      searchKeyword: '',
      isProductsFetching: false,
      isProductsLoaded: false,
    };

    this.setSearchKeyword = this.setSearchKeyword.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.addChatMessage = this.addChatMessage.bind(this);
    this.showProductRecommendations = this.showProductRecommendations.bind(this);

    this.toggleDetailModal = this.toggleDetailModal.bind(this);
  }

  state: {
    isDetailPopupActive: boolean,
    products: ProductsType,
    requests: ProductsType,
    chats: ChatsType,
    isSearching: boolean,
    isSearchingSubmitted: boolean,
    searchKeyword: string,
    isProductsFetching: boolean,
    isProductsLoaded: boolean,
  };

  setSearchKeyword: Function;
  handleSearchSubmit: Function;
  addChatMessage: Function;
  showProductRecommendations: Function;
  toggleDetailModal: Function;
  props: {};

  toggleDetailModal() {
    this.setState({ isDetailPopupActive: !this.state.isDetailPopupActive });
  }

  setSearchKeyword(searchKeyword: string) {
    this.setState({ searchKeyword });
  }

  handleSearchSubmit() {
    this.addChatMessage(`Saya mau cari ${this.state.searchKeyword}`);
    this.setState({
      isSearchingSubmitted: true,
      searchKeyword: '',
      isProductsFetching: true,
    });
    setTimeout(this.showProductRecommendations, 3000);
  }

  addChatMessage(message: string) {
    const newChat = { id: 2, sender: 'Me', message, time: '12:30' };
    const newChats = [...this.state.chats, newChat];
    this.setState({ chats: newChats });
  }

  showProductRecommendations() {
    this.setState({
      isProductsFetching: false,
      isProductsLoaded: true,
    });
  }

  render() {
    const {
      isDetailPopupActive,
      products,
      requests,
      chats,
      isSearching,
      isSearchingSubmitted,
      searchKeyword,
      isProductsFetching,
      isProductsLoaded,
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.chatList}>
          { chats.map(chat => (<MessageBubble key={chat.id} {...chat} />))}
          { isSearching && (
            <ChatSearch
              handleChange={this.setSearchKeyword}
              handleSubmit={this.handleSearchSubmit}
              searchKeyword={searchKeyword}
            />) }
          { isSearchingSubmitted && <MessageBubble sender="Bello" message="Ditunggu sebentar ya... Bello cari dulu!" time="12:30" /> }
          { isProductsFetching && <Image source={BelloIcon} style={{ width: '35%', height: '30%', alignSelf: 'center', margin: 20 }} /> }
          { isSearchingSubmitted && !isProductsFetching && <MessageBubble sender="Bello" message="Pencarian selesai. Bello dapat 10 barang nih!" time="12:30" /> }
          { isProductsLoaded && (
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} products={products} />
            ) }
          {
          // <ChatSectionHeading headingText={'Senin, 25 Mei'} />
          // <MessageBubble sender="Bello" time="12:30" message="Bello bos! mau beli apa?" />
          // <ChatSearch />
          // <MessageBubble sender="Me" time="12:35" message="Beli kaos jersey real mandrit" />
          // <MessageBubble sender="Bello" time="12:30" message="Dicari dulu ya!" />
          // <MessageBubble sender="Bello" time="12:30" message="Ketemu 5 barang yang cocok nih bos" />
          // <ProductRecommendations toggleDetailModal={this.toggleDetailModal} products={products} />
          // <MessageBubble sender="Me" time="12:35" message="Beli 1 ya Bello!" />
          // <MessageBubble sender="Bello" time="12:30" message="Barang sudah dibeli. Checkout atau mau belanja lagi?" />
          // <MessageBubble sender="Me" time="12:35" message="Mau belanja lagi deh" />
          // <MessageBubble sender="Bello" time="12:30" message="Mau beli apa lagi bos?" />
          // <ChatSearch />
          // <MessageBubble sender="Bello" time="12:30" message="Dicari dulu ya!" />
          // <MessageBubble sender="Bello" time="12:30" message="Tidak ketemu nih, Bello umumin ke pelapak yang tertarik dulu ya. Nanti Bello kabarin lagi deh, gimana?" />
          // <MessageBubble sender="Me" time="12:35" message="Boleh, nanti kabarin ya Bello!" />
          // <MessageBubble sender="Bello" time="12:30" message="Siap! nanti Bello kabarin" />
          // <ChatSectionHeading headingText={'21 Mei 2017'} />
          // <MessageBubble sender="Bello" time="12:30" message="Bello Hendry! Ada 2 barang yang kemarin kamu cari nih. Cek yuk!" />
          // <ProductRecommendations toggleDetailModal={this.toggleDetailModal} products={requests} />
          }
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        { isDetailPopupActive && <ProductDetailPopup toggleDetailModal={this.toggleDetailModal} /> }
      </View>
    );
  }
}

export default productContainer;
