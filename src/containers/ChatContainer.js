// @flow
import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Chat Components
import MessageBubble from '../components/Chat/MessageBubble';
import ChatSearch from '../components/Chat/ChatSearch';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import ActionBar from '../components/Chat/ActionBar';

// Product Recommendations Components
import ProductRecommendations from '../components/Product/Recommendations';
import ProductDetailPopup from '../components/Product/DetailPopup';

// StateTypes
import type { ChatsType, ProductsType } from '../types';

// Static Files
import cartIcon from '../images/shopping-cart.png';
import BelloIcon from '../images/bello.png';
import data from '../../data/db.json';

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
    this.addProductRequestReminder = this.addProductRequestReminder.bind(this);
    this.showProductRecommendations = this.showProductRecommendations.bind(this);

    // ActionBar methods
    this.displayActionBar = this.displayActionBar.bind(this);
    this.displaySearchAction = this.displaySearchAction.bind(this);
    this.goBackHomeAction = this.goBackHomeAction.bind(this);
    this.resetAction = this.resetAction.bind(this);
    this.cancelBuyingAction = this.cancelBuyingAction.bind(this);
    this.productNotFoundAction = this.productNotFoundAction.bind(this);
    this.productRequestConfAction = this.productRequestConfAction.bind(this);

    // Product Recommendations methods
    this.toggleDetailModal = this.toggleDetailModal.bind(this);
  }

  // static state StateTypes
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

  // static functions StateTypes
  addChatMessage: Function;
  displayActionBar: Function;
  goBackHomeAction: Function;
  resetAction: Function;
  displaySearchAction: Function;
  cancelBuyingAction: Function;
  productNotFoundAction: Function;
  productRequestConfAction: Function;

  setSearchKeyword: Function;
  handleSearchSubmit: Function;
  addProductRequestReminder: Function;
  showProductRecommendations: Function;
  toggleDetailModal: Function;
  props: {};

  // Chat methods
  addChatMessage(sender: string, message: string) {
    const { chats } = this.state;
    const chatsId = chats.map(chat => chat.id);
    const newChatId = chatsId[chatsId.length - 1] + 1;
    const newChat = { id: newChatId, sender, message, time: '12:30' };
    const newChats = [...chats, newChat];
    this.setState({ chats: newChats });
  }

  // Product Search methods
  setSearchKeyword(searchKeyword: string) {
    this.setState({ searchKeyword });
  }

  handleSearchSubmit() {
    this.addChatMessage('Me', `Saya mau cari ${this.state.searchKeyword}`);
    this.setState({
      isSearchingSubmitted: true,
      isProductsFetching: true,
    });
    setTimeout(this.showProductRecommendations, 3000);
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
      searchKeyword: '',
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

  resetAction() {
    this.addChatMessage('Bello', 'Oke, ada lagi yang bisa Bello bantu?');
    setTimeout(() => {
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
      this.addChatMessage('Bello', 'Wah, kenapa dibatalin?');
      this.displayActionBar({
        redLabel: 'Tidak Ketemu',
        redMethod: this.productNotFoundAction,
        orangeLabel: 'Tidak Jadi Beli',
        orangeMethod: this.resetAction,
      });
    }, 1000);
  }

  productNotFoundAction() {
    this.addChatMessage('Bello', 'Kenapa tidak ada barang yang cocok?');
    this.displayActionBar({
      redLabel: 'Harga mahal',
      redMethod: this.productRequestConfAction,
      orangeLabel: 'Beda Barang',
      orangeMethod: this.productRequestConfAction,
      greenLabel: 'Lainnya',
      greenMethod: this.productRequestConfAction,
    });
  }

  productRequestConfAction() {
    this.addChatMessage('Bello', 'Oh begitu... kalau ada barang baru yang lebih murah atau lebih cocok, mau Bello reminder tidak?');
    this.displayActionBar({
      redLabel: 'Tidak',
      redMethod: this.resetAction,
      greenLabel: 'Boleh',
      greenMethod: this.addProductRequestReminder,
    });
  }

  addProductRequestReminder() {
    const { searchKeyword } = this.state;
    // do something with searchKeyword here, save to DB!
    this.addChatMessage('Bello', `Siap, nanti Bello kabarin kalau ada ${searchKeyword} yang baru dan sesuai dengan keinginan ya! Kalau mau membatalkan, kamu bisa masuk ke pengaturan untuk menghapus reminder request.`);
    setTimeout(this.resetAction, 1000);
  }

  // Product Recommendations methods
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

  toggleDetailModal() {
    this.setState({ isDetailPopupActive: !this.state.isDetailPopupActive });
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
          { isSearching && !isSearchingSubmitted && (
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
