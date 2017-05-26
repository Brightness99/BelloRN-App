// @flow
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import numeral from 'numeral';

// Chat Components
import MessageBubble from '../components/Chat/MessageBubble';
import ChatSearch from '../components/Chat/ChatSearch';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import ActionBar from '../components/Chat/ActionBar';

// Core Components
import GreyButton from '../components/Core/GreyButton';
import OrangeButton from '../components/Core/OrangeButton';

// Product Recommendations Components
import ProductRecommendations from '../components/Product/Recommendations';
import ProductDetailPopup from '../components/Product/DetailPopup';

// StateTypes
import type { ChatsType, ProductType, ProductsType } from '../types';

// Static Files
import cartIcon from '../images/shopping-cart.png';
import BelloIcon from '../images/bello.png';
import data from '../../data/db.json';

import styles from './chatContainer.styles';

// Redux Actions
import { connect } from 'react-redux';
import { getProductRecommendation } from '../actions/recommendation';
import { sendBuyRequest } from '../actions/buyrequest';


// TODO a quick hack! put this into redux and connect it to renderRightButton
let globalCartLength = 0;

class productContainer extends React.Component {
  // Header right icon
  static renderRightButton = () => (
    <TouchableOpacity onPress={Actions.cart}>
      <Image source={cartIcon} style={{ width: 25, height: 25, marginTop: 0 }} />
      <View style={{ backgroundColor: '#D91E18', position: 'absolute', width: 15, height: 15, borderRadius: 7, right: -5, top: -5 }}>
        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>
          { globalCartLength }
        </Text>
      </View>
    </TouchableOpacity>
  );

  constructor(props: Object) {
    super(props);
    this.state = {
      isDetailPopupActive: false,
      products: [],
      selectedProduct: { id: 0, name: '', owner: '', price: 0, image: '', quantity: 0 },
      selectedProductIndexCursor: 0,
      requests: data.requests,
      chats: [], // TODO reduxify this state
      isSearching: true,
      isSearchingSubmitted: false,
      searchKeyword: '',
      isProductsFetching: false,
      isProductsLoaded: false,
      isSettingProductQuantity: false,
      isActionBarVisible: false,
      actionBarMenu: {
        redLabel: 'Batal',
        orangeLabel: 'Cari yang lain',
        greenLabel: '',
      },
      carts: [], // TODO reduxify this state
    };

    // Chat methods
    this.setSearchKeyword = this.setSearchKeyword.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.addChatMessage = this.addChatMessage.bind(this);
    this.addProductRequestReminder = this.addProductRequestReminder.bind(this);
    this.displayProductRecommendations = this.displayProductRecommendations.bind(this);

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
    this.setSelectedProductCursor = this.setSelectedProductCursor.bind(this);
    this.displayProductQuantitySelector = this.displayProductQuantitySelector.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  // static state StateTypes
  state: {
    isDetailPopupActive: boolean,
    products: ProductsType,
    selectedProduct: ProductType,
    selectedProductIndexCursor: number,
    requests: ProductsType,
    chats: ChatsType,
    isSearching: boolean,
    isSearchingSubmitted: boolean,
    searchKeyword: string,
    isProductsFetching: boolean,
    isProductsLoaded: boolean,
    isSettingProductQuantity: boolean,
    isActionBarVisible: boolean,
    actionBarMenu: Object,
    carts: ProductsType,
  };

  componentDidMount() {
    // initial greet message
    this.addChatMessage('Bello', 'Bello! Mau beli apa hari ini?');
  }

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
  displayProductRecommendations: Function;
  toggleDetailModal: Function;
  setSelectedProductCursor: Function;
  displayProductQuantitySelector: Function;
  setSelectedProductQuantity: Function;
  addProductToCart: Function;

  scrollViewComponent: ReactElement<any>;
  props: {};

  // Add New Chat Message to Local State
  addChatMessage(sender: string, message: string) {
    const { chats } = this.state;
    const chatsId = chats.map(chat => chat.id);
    const newChatId = chats.length === 0 ? 1 : chatsId[chatsId.length - 1] + 1;
    const newChat = { id: newChatId, sender, message, time: moment().format('DD-MM-YYYY HH:mm') };
    const newChats = [...chats, newChat];
    this.setState({ chats: newChats });
  }

  // Product Search methods
  setSearchKeyword(searchKeyword: string) {
    this.setState({ searchKeyword });
  }

  // Submit Search Form and Start Displaying Recommended Products
  handleSearchSubmit() {
    this.addChatMessage('Me', `Saya mau cari ${this.state.searchKeyword}`);
    this.setState({
      isSearchingSubmitted: true,
      isProductsFetching: true,
    });

    //setTimeout(this.displayProductRecommendations, 3000);
    this.props.getProductRecommendation(this.state.searchKeyword);
    /*this.props.sendBuyRequest({
      user_id: data.user_id,
      keyword: data.keyword,
      is_purchase: 0,
      reminder_schedule: data.reminder_schedule,
      is_cancel: data.is_cancel,
      cancelation_reason: data.cancelation_reason,
    });*/
  }

  // Display User Action Bar (Footer)
  displayActionBar(buttons: Object) {
    this.setState({
      isActionBarVisible: true,
      actionBarMenu: buttons,
    });
  }

  // Display User Product Search Box
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

  // Navigate to Home Scene
  goBackHomeAction() {
    this.addChatMessage('Bello', 'Oke. Have a nice day!');
    setTimeout(Actions.pop, 1000);
  }

  // Revert to initial user action
  resetAction() {
    this.addChatMessage('Bello', 'Oke, ada lagi yang bisa Bello bantu?');
    this.displayActionBar({
      redLabel: 'Tidak ada',
      redMethod: this.goBackHomeAction,
      orangeLabel: 'Belanja',
      orangeMethod: this.displaySearchAction,
      greenLabel: 'Buka Cart',
      greenMethod: Actions.cart,
    });
  }

  // Cancel user's buying action to trigger cancellation reasons
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

  // User Pick a buying cancellation reason
  productNotFoundAction() {
    this.addChatMessage('Bello', 'Kenapa tidak ada barang yang cocok?');
    this.displayActionBar({
      redLabel: 'Harga mahal',
      redMethod: this.productRequestConfAction,
      orangeLabel: 'Kurang Info',
      orangeMethod: this.productRequestConfAction,
      greenLabel: 'Lainnya',
      greenMethod: this.productRequestConfAction,
    });
  }

  // Asks User to decide to add a product reminder request or not
  productRequestConfAction() {
    this.addChatMessage('Bello', 'Oh begitu... kalau ada barang baru yang lebih murah atau lebih cocok, mau Bello reminder tidak?');
    this.displayActionBar({
      redLabel: 'Tidak',
      redMethod: this.resetAction,
      greenLabel: 'Boleh',
      greenMethod: this.addProductRequestReminder,
    });
  }

  // add a search keyword as a product search reminder request
  addProductRequestReminder() {
    const { searchKeyword } = this.state;
    // do something with searchKeyword here, save to DB!
    this.addChatMessage('Bello', `Siap, nanti Bello kabarin kalau ada ${searchKeyword} yang baru dan sesuai dengan keinginan ya! Kalau mau membatalkan, kamu bisa masuk ke pengaturan untuk menghapus reminder request.`);
    setTimeout(this.resetAction, 1000);
  }

  // Display list of recommended products based on search keyword
  displayProductRecommendations() {
    setTimeout(() => {
      this.setState({
        isProductsFetching: false,
        isProductsLoaded: true,
      });
      this.addChatMessage('Bello', `Pencarian selesai. Bello dapat 10 barang yang sesuai dengan ${this.state.searchKeyword}.`);
      this.displayActionBar({
        redLabel: 'Batal',
        redMethod: this.cancelBuyingAction,
        orangeLabel: 'Cari yang lain',
        orangeMethod: this.displaySearchAction,
      });
    }, 1500);
  }

  // toggle selected product detail modal visibility and set selected product value
  toggleDetailModal(product: ProductType, indexCursor: number) {
    const { isDetailPopupActive } = this.state;
    this.setState({ isDetailPopupActive: !isDetailPopupActive });
    if (isDetailPopupActive) {
      this.displayActionBar({
        redLabel: 'Batal',
        redMethod: this.cancelBuyingAction,
        orangeLabel: 'Cari yang lain',
        orangeMethod: this.displaySearchAction,
      });
    } else {
      this.setState({
        selectedProduct: product,
        selectedProductIndexCursor: indexCursor,
      });
      this.displayActionBar({
        greenLabel: 'Beli',
        greenMethod: this.displayProductQuantitySelector,
      });
    }
  }

  // change selected product detail cursor to prev or next of the list
  setSelectedProductCursor(direction: string) {
    const currentProductCursor = this.state.selectedProductIndexCursor;
    const cursorMovement = direction === 'next' ? 1 : -1;
    let selectedProduct = this.state.products[currentProductCursor + cursorMovement];
    if (selectedProduct) { // if selectedProduct is undefined (is outside of array)
      // change cursor position
      this.setState({
        selectedProductIndexCursor: this.state.selectedProductIndexCursor + cursorMovement,
        selectedProduct,
      });
    } else {
      // do not change selected product to state or change cursor
      selectedProduct = this.state.selectedProduct;
    }
  }

  // Display quantity selector for a product to be added to cart
  displayProductQuantitySelector() {
    const { selectedProduct } = this.state;
    this.setState({
      selectedProduct: { ...selectedProduct, quantity: 1 },
      isSettingProductQuantity: true,
      isSearching: false,
      isSearchingSubmitted: false,
      isProductsLoaded: false,
      isProductsFetching: false,
    });
    this.addChatMessage('Me', `Mau beli ${selectedProduct.name} yang ini ya.`);
    setTimeout(() => {
      this.addChatMessage('Bello', `Mau beli ${selectedProduct.name} berapa item?`);
    }, 500);
    this.toggleDetailModal(); // close the modal
  }

  setSelectedProductQuantity(increment: number) {
    const { selectedProduct } = this.state;
    if (increment === -1 && selectedProduct.quantity <= 1) {
      // do nothing?
      return false;
    }
    const newProduct = { ...selectedProduct, quantity: selectedProduct.quantity + increment };
    this.setState({ selectedProduct: newProduct });
    return true;
  }

  // Add Product to Cart with Some Quantity
  addProductToCart() {
    const { selectedProduct, carts } = this.state;
    const newCarts = [...carts, selectedProduct];
    this.setState({
      carts: newCarts,
      isSettingProductQuantity: false,
    });
    globalCartLength += 1; // global cart length hack, remove this later
    this.addChatMessage('Me', `Pesan ${selectedProduct.quantity} item ya!`);
    setTimeout(() => {
      this.addChatMessage('Bello', `Siap! ${selectedProduct.name} sudah Bello masukin ke cart. Apakah ada lagi yang mau dibeli?`);
    }, 500);
    this.displayActionBar({
      orangeLabel: 'Cari Barang Lain',
      orangeMethod: this.displaySearchAction,
      greenLabel: 'Tidak',
      greenMethod: this.resetAction,
    });
  }

  // Components Render Methods

  renderChatList() {
    const { chats } = this.state;
    return chats.map((chat, index, chatsArr) => {
      const chatDate = moment(chat.time, 'DD-MM-YYYY HH:ss').format('DD MMM YYYY');
      const chatYesterdayDate = index === 0 ? '' : moment(chatsArr[index - 1].time, 'DD-MM-YYYY HH:ss').format('DD MMM YYYY');
      if (chatDate !== chatYesterdayDate) {
        return (
          <View key={chat.id}>
            <ChatSectionHeading headingText={chatDate} />
            <MessageBubble {...chat} />
          </View>
        );
      }
      return (
        <View key={chat.id}>
          <MessageBubble {...chat} />
        </View>
      );
    });
  }

  renderSearchDialog() {
    const { isSearching, isSearchingSubmitted, searchKeyword } = this.state;
    return isSearching && !isSearchingSubmitted && (
      <ChatSearch
        handleChange={this.setSearchKeyword}
        handleSubmit={this.handleSearchSubmit}
        searchKeyword={searchKeyword}
      />
    );
  }

  renderSearchLoadingDialog() {
    const { isSearchingSubmitted, isProductsLoaded } = this.state;
    return isSearchingSubmitted && !isProductsLoaded && (
      <MessageBubble
        sender="Bello"
        message="Ditunggu sebentar ya... Bello cari dulu!"
        time={moment().format('DD-MM-YYYY HH:mm')}
      />
    );
  }

  renderProductLoading() {
    const { isProductsFetching } = this.state;
    return isProductsFetching && (
      <Image
        source={BelloIcon}
        style={{ width: 100, height: 100, alignSelf: 'center', margin: 20 }}
      />
    );
  }

  renderProductLoadedDialog() {
    const { isProductsLoaded, products } = this.state;
    return isProductsLoaded && (
      <ProductRecommendations
        toggleDetailModal={this.toggleDetailModal}
        products={products}
      />
    );
  }

  renderProductDetailModal() {
    const { isDetailPopupActive, selectedProduct } = this.state;
    return isDetailPopupActive && (
      <ProductDetailPopup
        toggleDetailModal={this.toggleDetailModal}
        productCursorPrev={() => this.setSelectedProductCursor('prev')}
        productCursorNext={() => this.setSelectedProductCursor('next')}
        product={selectedProduct}
      />
    );
  }

  renderProductQuantitySetting() {
    const { isSettingProductQuantity, selectedProduct } = this.state;
    return isSettingProductQuantity && (
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', width: '60%', alignSelf: 'center', margin: 10 }}>
          <GreyButton label={'-'} handleClick={() => this.setSelectedProductQuantity(-1)} />
          <Text style={{ padding: 10, fontSize: 16, color: '#FFFFFF' }}>
            { selectedProduct.quantity }
          </Text>
          <GreyButton label={'+'} handleClick={() => this.setSelectedProductQuantity(1)} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFFFFF', textAlign: 'center' }}>
          { `Rp.${numeral(selectedProduct.price * selectedProduct.quantity).format('0,0[.]00')}` }
        </Text>
        <OrangeButton label={'Lanjut'} handleClick={this.addProductToCart} />
      </View>
    );
  }

  renderActionBar() {
    const { isActionBarVisible, actionBarMenu } = this.state;
    return isActionBarVisible && <ActionBar {...actionBarMenu} />;
  }


  componentWillReceiveProps = (nextProps) => {
    if (this.props.isFetchingProduct && !nextProps.isFetchingProduct) {
      this.displayProductRecommendations();
      this.setState({
        products: nextProps.productResult.length > 0 ? nextProps.productResult : [],
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.chatList}
          ref={(thisComponent) => { this.scrollViewComponent = thisComponent; }}
          onContentSizeChange={() => { this.scrollViewComponent.scrollToEnd({ animated: false }); }}
        >
          { this.renderChatList() }
          { this.renderSearchDialog() }
          { this.renderSearchLoadingDialog() }
          { this.renderProductLoading() }
          { this.renderProductLoadedDialog() }
          { this.renderProductQuantitySetting() }
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        { this.renderProductDetailModal() }
        { this.renderActionBar() }
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getProductRecommendation: keyword => dispatch(getProductRecommendation(keyword)),
  sendBuyRequest: requestData => dispatch(sendBuyRequest(requestData)),
});

const mapStateToProps = state => ({
  isFetchingProduct: state.recommendation.isFetching,
  productResult: state.recommendation.result,
  userdata: state.userdata.result,
});

export default connect(mapStateToProps, mapDispatchToProps)(productContainer);
