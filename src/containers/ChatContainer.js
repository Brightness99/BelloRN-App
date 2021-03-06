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

import styles from './chatContainer.styles';

// Redux Actions
import { getProductRecommendation, resetReminder } from '../actions/recommendation';
import { sendBuyRequest, updateBuyRequest } from '../actions/buyrequest';
import { getCart, addToCart } from '../actions/cart';

class CartHeaderIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFetch: true,
      cartsLength: 0,
    };
  }

  componentDidMount = () => {
    this.props.getCart({
      user_id: this.props.userdata.id,
      token: this.props.userdata.token,
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={Actions.cart} activeOpacity={1}>
        <Image source={cartIcon} style={{ width: 25, height: 25, marginTop: 0, marginRight: 10 }} />
        <View style={{ backgroundColor: '#D91E18', position: 'absolute', width: 15, height: 15, borderRadius: 7, right: 0, top: 0 }}>
          <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>
            { this.props.carts.length }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class productContainer extends React.Component {
  static renderRightButton = () => {
    return (
      <ConnectedCartHeaderIcon />
    );
  }

  constructor(props: Object) {
    super(props);
    this.state = {
      isDetailPopupActive: false,
      products: [],
      selectedProduct: { id: 0, name: '', owner: '', price: 0, image: '', quantity: 0 },
      selectedProductIndexCursor: 0,
      requests: [],
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

  props: {
    getCart: Function,
  };

  componentDidMount = () => {
    this.addChatMessage('Bello', 'Bello! Mau beli apa hari ini?');
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.isFetchingProduct && !nextProps.isFetchingProduct) {
      if (this.props.isReminder) {
        this.setState({
          isSearching: false,
          searchKeyword: this.props.keyword,
        });
        this.props.resetReminder();
      }
      this.displayProductRecommendations(nextProps.productResult.length);
      this.setState({
        products: nextProps.productResult.length > 0 ? nextProps.productResult : [],
      });
    }
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
  props: {
    getProductRecommendation: Function,
    sendBuyRequest: Function,
    updateBuyRequest: Function,
    addToCart: Function,

    isFetchingProduct: boolean,
    productResult: array,
    userdata: Object,
  };

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

    this.props.getProductRecommendation(this.state.searchKeyword);
    this.props.sendBuyRequest({
      user_id: this.props.userdata.id,
      keyword: this.state.searchKeyword,
      is_purchase: 0,
      reminder_schedule: moment().format('YYYY-MM-DD'),
      is_cancel: 0,
      cancelation_reason: '',
      is_delete: 0,
    });
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
      redLabel: 'Harga Mahal',
      redMethod: () => this.productRequestConfAction('Harga Mahal'),
      orangeLabel: 'Kurang Info',
      orangeMethod: () => this.productRequestConfAction('Kurang Info'),
      greenLabel: 'Lainnya',
      greenMethod: () => this.productRequestConfAction('Lainnya'),
    });
  }

  // Asks User to decide to add a product reminder request or not
  productRequestConfAction(cancellationReason) {
    this.addChatMessage('Bello', 'Oh begitu... kalau ada barang baru yang lebih murah atau lebih cocok, mau Bello reminder tidak?');
    this.displayActionBar({
      redLabel: 'Tidak',
      redMethod: this.resetAction,
      greenLabel: 'Boleh',
      greenMethod: this.addProductRequestReminder,
    });

    // Update Buy Request Cancellation
    this.props.updateBuyRequest({
      user_id: this.props.userdata.id,
      keyword: this.state.searchKeyword,
      is_purchase: 0,
      reminder_schedule: false,
      is_cancel: 1,
      cancelation_reason: cancellationReason,
      is_read: false,
      is_delete: false,
    });
  }

  // add a search keyword as a product search reminder request
  addProductRequestReminder() {
    const { searchKeyword } = this.state;

    // Update Buy Request Reminder
    this.props.updateBuyRequest({
      user_id: this.props.userdata.id,
      keyword: this.state.searchKeyword,
      is_purchase: false,
      reminder_schedule: moment().add(14, 'days').format('YYYY-MM-DD'),
      is_cancel: false,
      cancelation_reason: false,
      is_read: 0,
      is_delete: false,
    });

    console.log({
      user_id: this.props.userdata.id,
      keyword: this.state.searchKeyword,
      is_purchase: false,
      reminder_schedule: moment().add(14, 'days').format('YYYY-MM-DD'),
      is_cancel: false,
      cancelation_reason: false,
      is_read: 0,
      is_delete: false,
    })

    this.addChatMessage('Bello', `Siap, nanti Bello kabarin kalau ada ${searchKeyword} yang baru dan sesuai dengan keinginan ya! Kalau mau membatalkan, kamu bisa masuk ke pengaturan untuk menghapus reminder request.`);
    setTimeout(this.resetAction, 1000);
  }

  // Display list of recommended products based on search keyword
  displayProductRecommendations(productLength) {
    // setTimeout(() => {
    this.setState({
      isProductsFetching: false,
      isProductsLoaded: true,
    });
    this.addChatMessage('Bello', `Pencarian selesai. Bello dapat ${productLength} barang yang sesuai dengan ${this.props.keyword}.`);
    this.displayActionBar({
      redLabel: 'Batal',
      redMethod: this.cancelBuyingAction,
      orangeLabel: 'Cari yang lain',
      orangeMethod: this.displaySearchAction,
    });
    // }, 1500);
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

    this.addChatMessage('Me', `Pesan ${selectedProduct.quantity} item ya!`);

    // Add To Cart
    this.props.addToCart({
      product_id: this.state.selectedProduct.id,
      quantity: this.state.selectedProduct.quantity,
      user_id: this.props.userdata.id,
      token: this.props.userdata.token,
    });

    // Update Buy Request is_purchase data
    this.props.updateBuyRequest({
      user_id: this.props.userdata.id,
      keyword: this.state.searchKeyword,
      is_purchase: 1,
      reminder_schedule: false,
      is_cancel: false,
      cancelation_reason: false,
      is_read: false,
      is_delete: false,
    });

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
    const { isProductsLoaded, products, searchKeyword } = this.state;
    return isProductsLoaded && (
      <ProductRecommendations
        toggleDetailModal={this.toggleDetailModal}
        products={products}
        searchKeyword={searchKeyword}
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
          <Text style={{ padding: 10, fontSize: 16, color: '#353535' }}>
            { selectedProduct.quantity }
          </Text>
          <GreyButton label={'+'} handleClick={() => this.setSelectedProductQuantity(1)} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#353535', textAlign: 'center' }}>
          { `Rp ${numeral(selectedProduct.price * selectedProduct.quantity).format('0,0[.]00')}` }
        </Text>
        <OrangeButton label={'Lanjut'} handleClick={this.addProductToCart} />
      </View>
    );
  }

  renderActionBar() {
    const { isActionBarVisible, actionBarMenu } = this.state;
    return isActionBarVisible && <ActionBar {...actionBarMenu} />;
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
  resetReminder: () => dispatch(resetReminder()),
  sendBuyRequest: requestData => dispatch(sendBuyRequest(requestData)),
  updateBuyRequest: requestData => dispatch(updateBuyRequest(requestData)),
  addToCart: requestData => dispatch(addToCart(requestData)),
});

const mapStateToProps = state => ({
  isFetchingProduct: state.recommendation.isFetching,
  productResult: state.recommendation.result,
  keyword: state.recommendation.keyword,
  isReminder: state.recommendation.isReminder,
  userdata: state.userdata.result,
});

const mapDispatchToPropsForHeaderIcon = dispatch => ({
  getCart: requestData => dispatch(getCart(requestData)),
});

const mapStateToPropsForHeaderIcon = state => ({
  userdata: state.userdata.result,
  isCartFetching: state.cart.isFetching,
  carts: state.cart.result,
});

const ConnectedCartHeaderIcon = connect(mapStateToPropsForHeaderIcon, mapDispatchToPropsForHeaderIcon)(CartHeaderIcon);
export default connect(mapStateToProps, mapDispatchToProps)(productContainer);
