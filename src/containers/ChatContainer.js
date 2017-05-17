// @flow

import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MessageBubble from '../components/Chat/MessageBubble';
import ChatSearch from '../components/Chat/ChatSearch';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import ProductRecommendations from '../components/Product/Recommendations';
import ProductDetailPopup from '../components/Product/DetailPopup';
import ActionBar from '../components/Chat/ActionBar';

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
      isActionBarVisible: false,
      actionBarMenu: {
        redLabel: 'Batal',
        orangeLabel: 'Cari yang lain',
        greenLabel: '',
      },
    };

    this.setSearchKeyword = this.setSearchKeyword.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.addChatMessage = this.addChatMessage.bind(this);
    this.showProductRecommendations = this.showProductRecommendations.bind(this);
    this.displayActionBar = this.displayActionBar.bind(this);

    // ActionBar methods
    this.displaySearchAction = this.displaySearchAction.bind(this);
    this.goBackHomeAction = this.goBackHomeAction.bind(this);
    this.cancelBuyingAction = this.cancelBuyingAction.bind(this);

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
    isActionBarVisible: boolean,
    actionBarMenu: Object,
  };

  setSearchKeyword: Function;
  handleSearchSubmit: Function;
  addChatMessage: Function;
  showProductRecommendations: Function;

  displayActionBar: Function;
  goBackHomeAction: Function;
  displaySearchAction: Function;
  cancelBuyingAction: Function;
  toggleDetailModal: Function;
  props: {};

  toggleDetailModal() {
    this.setState({ isDetailPopupActive: !this.state.isDetailPopupActive });
  }

  setSearchKeyword(searchKeyword: string) {
    this.setState({ searchKeyword });
  }

  handleSearchSubmit() {
    this.addChatMessage('Me', `Saya mau cari ${this.state.searchKeyword}`);
    this.setState({
      isSearchingSubmitted: true,
      searchKeyword: '',
      isProductsFetching: true,
    });
    setTimeout(this.showProductRecommendations, 3000);
  }

  addChatMessage(sender: string, message: string) {
    const { chats } = this.state;
    const chatsId = chats.map(chat => chat.id);
    const newChatId = chatsId[chatsId.length - 1] + 1;
    const newChat = { id: newChatId, sender, message, time: '12:30' };
    const newChats = [...chats, newChat];
    this.setState({ chats: newChats });
  }

  showProductRecommendations() {
    setTimeout(() => {
      this.setState({
        isProductsFetching: false,
        isProductsLoaded: true,
      });
      this.displayActionBar({
        redLabel: 'Batal',
        redMethod: this.cancelBuyingAction,
        orangeLabel: 'Cari yang lain',
        orangeMethod: this.displaySearchAction,
      });
    }, 3000);
  }

  // User Chat Actions
  displayActionBar(buttons: Object) {
    this.setState({
      isActionBarVisible: true,
      actionBarMenu: buttons,
    });
  }

  displaySearchAction() {
    this.setState({
      isSearching: true,
      isSearchingSubmitted: false,
      isProductsFetching: false,
      isProductsLoaded: false,
      isActionBarVisible: false,
    });
    this.addChatMessage('Bello', 'Mau cari barang apa?');
  }

  goBackHomeAction() {
    this.addChatMessage('Bello', 'Oke. Have a nice day!');
    setTimeout(Actions.pop, 1000);
  }

  cancelBuyingAction() {
    this.setState({
      isActionBarVisible: false,
      isProductsFetching: false,
      isProductsLoaded: false,
      isSearching: false,
      isSearchingSubmitted: false,
    });
    this.addChatMessage('Me', 'Batalin dulu ya Bello!');
    setTimeout(() => {
      this.addChatMessage('Bello', 'Oke! Ada lagi yang bisa Bello bantu?');
      this.displayActionBar({
        redLabel: 'Tidak ada',
        redMethod: this.goBackHomeAction,
        orangeLabel: 'Belanja',
        orangeMethod: this.displaySearchAction,
        greenLabel: 'Cari Promo',
        greenMethod: () => {},
      });
    }, 1000);
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
      isActionBarVisible,
      actionBarMenu,
    } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.chatList}
          ref={(thisComponent) => { this.scrollViewComponent = thisComponent; }}
          onContentSizeChange={() => { this.scrollViewComponent.scrollToEnd({ animated: false }); }}
        >
          <ChatSectionHeading headingText={'21 Mei 2017'} />
          { chats.map(chat => (<MessageBubble key={chat.id} {...chat} />))}
          { isSearching && (
            <ChatSearch
              handleChange={this.setSearchKeyword}
              handleSubmit={this.handleSearchSubmit}
              searchKeyword={searchKeyword}
            />) }
          { isSearchingSubmitted && <MessageBubble sender="Bello" message="Ditunggu sebentar ya... Bello cari dulu!" time="12:30" /> }
          { isProductsFetching && <Image source={BelloIcon} style={{ width: 100, height: 100, alignSelf: 'center', margin: 20 }} /> }
          { isSearchingSubmitted && !isProductsFetching && <MessageBubble sender="Bello" message="Pencarian selesai. Bello dapat 10 barang nih!" time="12:30" /> }
          { isProductsLoaded && (
          <ProductRecommendations toggleDetailModal={this.toggleDetailModal} products={products} />
            ) }
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        { isDetailPopupActive && <ProductDetailPopup toggleDetailModal={this.toggleDetailModal} /> }
        { isActionBarVisible && <ActionBar {...actionBarMenu} /> }
      </View>
    );
  }
}

export default productContainer;
